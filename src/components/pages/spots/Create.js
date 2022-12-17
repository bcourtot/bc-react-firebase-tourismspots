import React, { useEffect, useState } from "react";
import SpotDataService from "../../../services/spot.services.js";
import { Alert } from "react-bootstrap";
import '../Pages.css';

const Create = ({ id, setSpotId }) =>
{
    const [ name, setName ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ longitude, setLongitude ] = useState("");
    const [ latitude, setLatitude ] = useState("");
    const [ province, setProvince ] = useState("");
    const [ message, setMessage ] = useState({ error: false, msg: "" });

    const handleSubmit = async (e) =>
    {
        e.preventDefault();
        setMessage("");
        if (name === "" || description === "" || longitude === "" || latitude === "" || province === "")
        {
            setMessage({ error: true, msg: "Remplissez les champs s'il vous plait" });
            return;
        }
        const newSpot = {
            name,
            description,
            longitude,
            latitude,
            province,
        };
        console.log(newSpot);

        try
        {
            if (id !== undefined && id !== "")
            {
                await SpotDataService.updateSpot(id, newSpot);
                setSpotId("");
                setMessage({ error: false, msg: "Mise à jour effectuée" });
            } else
            {
                await SpotDataService.addSpot(newSpot);
                setMessage({ error: false, msg: "Nouveau spot ajouté avec succès" });
            }
        } catch (err)
        {
            setMessage({ error: true, msg: err.message });
        }

        setName("");
        setDescription("");
        setLongitude("");
        setLatitude("");
        setProvince("");

    };

    const editHandler = async () =>
    {
        setMessage("");
        try
        {
            const docSnap = await SpotDataService.getBook(id);
            console.log("the record is :", docSnap.data());
            setName(docSnap.data().name);
            setDescription(docSnap.data().description);
            setLongitude(docSnap.data().longitude);
            setLatitude(docSnap.data().latitude);
            setProvince(docSnap.data().province);
        } catch (err)
        {
            setMessage({ error: true, msg: err.message });
        }
    };

    const handleChange = (event) =>
    {
        setProvince(event.target.value)
    }

    useEffect(() =>
    {
        console.log("Id : ", id);
        if (id !== undefined && id !== "")
        {
            editHandler();
        }
    }, [ id ]);


    return (
        <>
            <main>
                <section className="container">
                    {message?.msg && (
                        <Alert
                            variant={message?.error ? "danger" : "success"}
                            dismissible
                            onClose={() => setMessage("")}
                        >
                            {message?.msg}
                        </Alert>
                    )}
                    <form onSubmit={handleSubmit} id="main">
                        <h2 className="title d-flex text-dark">Créer un spot</h2>

                        <div className="d-flex gap">
                            <div className="input-parent">
                                <label for="categories">Catégorie</label>
                                <select value={province} onChange={handleChange} name="province" id="province" >
                                    <option value="empty">---</option>
                                    <option value="Province Sud">Province Sud</option>
                                    <option value="Province Nord">Province Nord</option>
                                    <option value="Province Iles">Province Iles</option>
                                </select>
                            </div>
                            <div className="input-parent">
                                <label for="name">Nom</label>
                                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Bonhomme de Bourail" />
                            </div>
                        </div>

                        <div className="input-parent">
                            <label for="description">Description</label>
                            <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Une structure de pierre se trouvant à la plage de la Roche Percée."></textarea>
                        </div>

                        <div className="d-flex gap">
                            <div className="input-parent">
                                <label for="longitude">Longitude</label>
                                <input type="text" id="longitude" value={longitude} onChange={(e) => setLongitude(e.target.value)} placeholder="-21.608538" />
                            </div>

                            <div className="input-parent">
                                <label for="latitude">Latitude</label>
                                <input type="text" id="latitude" value={latitude} onChange={(e) => setLatitude(e.target.value)} placeholder="165.456848" />
                            </div>
                        </div>

                        <div className="input-parent">
                            <label for="image">Images</label>
                            <input type="file" id="image" name="image" accept="image/png, image/jpeg, image/jpg" multiple />
                        </div>

                        <button class="btn-classic" type="submit">Créer</button>
                    </form>
                </section>
            </main>
        </>
    )
}

export default Create
