import { Link } from "react-router-dom"
import "./Login.css"

export default function Login() {
    return (
        <section id="login">
            <div className="form">
                <h2>Login</h2>
                <form className="login-form">
                    <div>
                        <label htmlFor="email">Email:</label>
                    <input type="text" name="email" id="email" placeholder="vladii@abv.bg" />
                    </div>

                    <div>
                        <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="vladii123"
                    />
                    </div>
                    <button type="submit">login</button>
                    <p className="message">
                        Not registered? <Link to="/register">Create an account</Link>
                    </p>
                </form>
            </div>
        </section>

    )
}