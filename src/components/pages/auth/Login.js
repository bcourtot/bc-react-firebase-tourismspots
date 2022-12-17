import React from 'react';
import '../Pages.css';
import firebase from 'firebase/app';
import 'firebase/auth';


const Login = () =>
{
    const handleSubmit = (event) =>
    {
        event.preventDefault();
        const email = event.target.elements.email.value;
        const password = event.target.elements.password.value;
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error)
        {
            console.error(error);
        });
    };

    return (
        <>
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

                        <button class="btn-classic" type="submit">Connexion</button>
                    </form>
                </section>
            </main>
        </>
    )
}

export default Login;
