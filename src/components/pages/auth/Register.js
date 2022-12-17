import React from 'react';
import '../Pages.css';
import firebase from 'firebase/app';
import 'firebase/auth';


const Register = () =>
{
    const handleSubmit = (event) =>
    {
        event.preventDefault();
        const email = event.target.elements.email.value;
        const password = event.target.elements.password.value;
        const passwordConfirmation = event.target.elements.passwordConfirmation.value;
        if (password !== passwordConfirmation)
        {
            console.error("Les mots de passe ne correspondent pas.");
            return;
        }
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error)
        {
            console.error(error);
        });
    };
    return (
        <>
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

                        <button class="btn-classic" type="submit">Créer un compte</button>
                    </form>
                </section>
            </main>
        </>
    )
}

export default Register;
