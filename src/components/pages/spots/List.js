import React, { useEffect, useState } from "react";
import SpotDataService from "../../../services/spot.services.js";
import '../Pages.css'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const List = ({ getSpotId }) =>
{
  const [ spots, setSpots ] = useState([]);
  const [ user, setUser ] = useState(null);

  useEffect(() =>
  {
    getSpots();
    const checkUser = firebase.auth().onAuthStateChanged(function (user)
    {
      console.log("user: ", user);
      if (user)
      {
        setUser(user);
      } else
      {
        setUser(null);
      }
    });

    return () => checkUser();
  }, []);

  const getSpots = async () =>
  {
    const data = await SpotDataService.getAllSpots();
    console.log(data.docs);
    setSpots(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteHandler = async (id) =>
  {
    await SpotDataService.deleteSpot(id);
    getSpots();
  };


  return (
    <>
      <main>
        <section className="container">
          <h1 className="title text-dark">Les meilleurs spots du Caillou !</h1>
        </section>
        <section className="spot-card">
          <ul className="d-flex list-style-none spots">
            {spots.map((doc, index) =>
            {
              return (
                <li>
                  <article className="card p-rel">
                    {user && <button className="btn-delete-spot" onClick={(e) => deleteHandler(doc.id)}>X</button>}
                    <img alt="new caledonia" src="./img/placeholder.jpg" width="256" />
                    <div className="spot-card-info p-absolute">
                      <h4>{doc.province}</h4>
                      <h3>{doc.name}</h3>
                      <p>{doc.description}</p>
                      <p> <i class="fa-solid fa-location-dot"></i> {doc.longitude}, {doc.latitude}</p>
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>
        </section>
      </main>
    </>
  );
};

export default List;