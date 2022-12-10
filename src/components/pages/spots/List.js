import React from 'react'
import '../Pages.css'

const List = () =>
{
  return (
    <>
      <main>
        <section className="container">
          <h1 className="title text-dark">Les meilleurs spots du Caillou !</h1>
        </section>
        <section className="spot-card">
          <ul className="d-flex list-style-none">
            <li>
              <article className="card p-rel">
                <img alt="new caledonia" src="./img/placeholder.jpg" width="256" />
                <div className="spot-card-info p-absolute">
                  <h4>Catégorie du spot</h4>
                  <h3>Nom du spot</h3>
                  <p>Description du spot</p>
                </div>
              </article>
            </li>
          </ul>
        </section>

      </main>
    </>
  );
};

export default List;