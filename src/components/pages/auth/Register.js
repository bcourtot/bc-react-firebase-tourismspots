import React from 'react';
import '../Pages.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { useNavigate } from "react-router-dom";



const Register = () =>
{
    const navigate = useNavigate();

    const handleSubmit = (event) =>
    {
        event.preventDefault();
        const email = event.target.elements.email.value;
        const password = event.target.elements.password.value;
        const passwordConfirmation = event.target.elements.passwordConfirmation.value;
        console.log("data: ", password, email, passwordConfirmation);
        if (password !== passwordConfirmation)
        {
            console.error("Les mots de passe ne correspondent pas.");
            return;
        }
        firebase.auth().createUserWithEmailAndPassword(email, password).then((res) =>
        {
            //you are login
            console.log('res: ', res);
            navigate("/");
        }).catch(function (error)
        {
            //error
            console.error(error);
        });
    };
    return (
        <main>
            <section className="container">
                <form onSubmit={handleSubmit} id="main">
                    <h2 className="title d-flex text-dark">Créer un compte</h2>

                    <div className="input-parent">
                        <label for="email">Email</label>
                        <input type="text" id="email" placeholder="email@email.com" required />
                    </div>

                    <div className="input-parent">
                        <label for="password">Mot de passe</label>
                        <input type="password" id="password" required />
                    </div>

                    <div className="input-parent">
                        <label for="passwordConfirmation">Confirmer le mot de passe</label>
                        <input type="password" id="passwordConfirmation" required />
                    </div>

                    <div className="input-parent">
                        <label for="rgpd">Les données entrées seront utilisées pour accéder au service de tourismspots.</label>
                        <input type="checkbox" id="rgpd" required />
                    </div>

                    <button className="btn-classic" type="submit">Créer un compte</button>
                </form>
            </section>
        </main>
    )
}

export default Register;