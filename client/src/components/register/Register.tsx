import { Link, useNavigate } from "react-router-dom"
import "./Register.css"
import { useContext, useState } from "react";
import { registerFormSubmitHandler, changeHandler } from "../../utils/formUtils";
import { AuthContext } from "../../contexts/AuthContext";

export default function Register() {
    const navigate = useNavigate()

    const [registerFormValues, setRegisterFormValues] = useState({
        email: '',
        password: '',
        repassword: "",
    });

    const context = useContext(AuthContext)

    return (
        <section id="register">
            <div className="form">
                <h2>Register</h2>
                <form className="reigster-form" onSubmit={(e) => registerFormSubmitHandler(e, registerFormValues, context?.setState, navigate)}>
                    <div>
                        <label htmlFor="register-email">Email:</label>
                        <input type="text" name="email" id="register-email" placeholder="vladii@abv.bg" value={registerFormValues.email}
                            onChange={(e) => changeHandler(e, setRegisterFormValues)} />
                    </div>
                    <div>
                        <label htmlFor="register-password">Password: </label>
                        <input
                            type="password"
                            name="password"
                            id="register-password"
                            placeholder="vladii123"
                            value={registerFormValues.password}
                            onChange={(e) => changeHandler(e, setRegisterFormValues)}
                        />
                    </div>
                    <div>
                        <label htmlFor="repeat-password">Repeat password:</label>
                        <input
                            type="password"
                            name="repassword"
                            id="repeat-password"
                            placeholder="vladii123"
                            value={registerFormValues.repassword}
                            onChange={(e) => changeHandler(e, setRegisterFormValues)}
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