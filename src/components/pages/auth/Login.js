import React from 'react'
import '../Pages.css'

const Login = () =>
{
    return (
        <>
            <main>
                <section className="container">
                    <form action="#!" id="main">
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
