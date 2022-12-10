import React from 'react';
import '../Pages.css';

const Create = () =>
{
    return (
        <>
            <main>
                <section className="container">
                    <form action="#!" id="main">
                        <h2 className="title d-flex text-dark">Créer un spot</h2>

                        <div className="d-flex gap">
                            <div className="input-parent">
                                <label for="categorie">Catégorie</label>
                                <select name="categorie" id="categorie" >
                                    <option value="empty">---</option>
                                    <option value="Province Sud">Province Sud</option>
                                    <option value="Province Nord">Province Nord</option>
                                    <option value="Province Iles">Province Iles</option>
                                </select>
                            </div>
                            <div className="input-parent">
                                <label for="name">Nom</label>
                                <input type="text" id="name" placeholder="Bonhomme de Bourail" />
                            </div>
                        </div>


                        <div className="input-parent">
                            <label for="description">Description</label>
                            <textarea id="description" placeholder="Une structure de pierre se trouvant à la plage de la Roche Percée."></textarea>
                        </div>

                        <div className="d-flex gap">
                            <div className="input-parent">
                                <label for="lon">Longitude</label>
                                <input type="text" id="lon" placeholder="-21.608538" />
                            </div>
                            <div className="input-parent">
                                <label for="lat">Latitude</label>
                                <input type="text" id="lat" placeholder="165.456848" />
                            </div>
                        </div>

                        <div className="input-parent">
                            <label for="image">Images</label>
                            <input type="file" id="image" name="image" accept="image/png, image/jpeg, image/jpg" multiple />
                        </div>

                        <input type="hidden" name="user.id" />
                        <button type="submit">Créer</button>
                    </form>
                </section>
            </main>
        </>
    )
}

export default Create
