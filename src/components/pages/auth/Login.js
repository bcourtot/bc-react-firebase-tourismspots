import React from 'react';
import '../Pages.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";



const Login = () =>
{
    const navigate = useNavigate();
    const handleSubmit = (event) =>
    {
        event.preventDefault();
        const email = event.target.elements.email.value;
        const password = event.target.elements.password.value;
        firebase.auth().signInWithEmailAndPassword(email, password).then((res) =>
        {
            console.log("res: ", res);
            navigate("/");
            return (
                <Alert variant="success">
                    Votre compte a été créé avec succès !
                </Alert>
            );
        }).catch(function (error)
        {
            //wrong data
            console.error(error);
            return (
                <Alert variant="danger">
                    Une erreur s'est produit, vérifier votre adresse mail et que vos mots de passes correspondent.
                </Alert>
            );
        });
    };

    return (
        <main>
            <section className="container">
                <form onSubmit={handleSubmit} id="main">
                    <h2 className="title d-flex text-dark">Se connecter</h2>

                    <div className="input-parent">
                        <label for="email">Email</label>
                        <input type="text" id="email" placeholder="email@email.com" required />
                    </div>

                    <div className="input-parent">
                        <label for="password">Mot de passe</label>
                        <input type="password" id="password" required />
                    </div>

                    <button className="btn-classic" type="submit">Connexion</button>
                </form>
            </section>
        </main>
    )
}

export default Login;