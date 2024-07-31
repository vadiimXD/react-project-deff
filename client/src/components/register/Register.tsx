import { Link } from "react-router-dom"
import "./Register.css"

export default function Register() {
    return (
        <section id="register">
            <div className="form">
                <h2>Register</h2>
                <form className="reigster-form">
                    <div>
                        <label htmlFor="register-email">Email:</label>
                        <input type="text" name="email" id="register-email" placeholder="vladii@abv.bg" />
                    </div>
                    <div>
                        <label htmlFor="register-password">Password: </label>
                        <input
                            type="password"
                            name="password"
                            id="register-password"
                            placeholder="vladii123"
                        />
                    </div>
                    <div>
                        <label htmlFor="repeat-password">Repeat password:</label>
                        <input
                            type="password"
                            name="re-password"
                            id="repeat-password"
                            placeholder="vladii123"
                        />
                    </div>
                    <button type="submit">Register</button>
                    <p className="message">
                        Already registered? <Link to="/login">Login</Link>
                    </p>
                </form>
            </div>
        </section>
    )
}