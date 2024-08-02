import { Link } from "react-router-dom"
import "./Login.css"
import { useState } from "react"
import { changeHandler, loginFormSubmitHandler } from "../../utils/formUtils"

export default function Login() {
    let [loginFormValues, setLoginFormValues] = useState({
        email: "",
        password: ""
    })

    return (
        <section id="login">
            <div className="form">
                <h2>Login</h2>
                <form className="login-form" onSubmit={(e) => loginFormSubmitHandler(e, loginFormValues)}>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            placeholder="vladii@abv.bg"
                            value={loginFormValues.email}
                            onChange={(e) => changeHandler(e, setLoginFormValues)}
                        />
                    </div>

                    <div>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="vladii123"
                            value={loginFormValues.password}
                            onChange={(e) => changeHandler(e, setLoginFormValues)}
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