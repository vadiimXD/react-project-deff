import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"
import { useContext } from "react"
import { AuthType } from "../../types/AuthType"
import { AuthContext } from "../../contexts/AuthContext"

export default function Header() {
    const navigate = useNavigate()
    const context: AuthType | undefined = useContext(AuthContext)
    const [isLogged] = useAuth({})
    return (
        <>
            <header>
                <nav>

                    {!!isLogged ? (
                        <div className="user">
                            <span className="material-symbols-outlined sized">
                                <Link to="/profile">person</Link>
                            </span>

                            <span className="material-symbols-outlined sized">
                                <Link to="/create">add_circle</Link>
                            </span>

                            <span className="material-symbols-outlined sized">
                                <a onClick={() => {
                                    context?.setState(false)
                                    localStorage.clear()
                                    navigate("/login")
                                }}>exit_to_app</a>
                            </span>

                        </div>
                    ) : (
                        <div className="guest">

                            <span className="material-symbols-outlined sized">
                                <Link to="/login">login</Link>
                            </span>

                            <span className="material-symbols-outlined sized">
                                <Link to="/register">app_registration</Link>
                            </span>
                        </div>
                    )}
                    <div>

                        <span className="material-symbols-outlined sized">
                            <Link to="/dashboard">dashboard</Link>
                        </span>

                        <span className="material-symbols-outlined sized">
                            <Link to="/">home</Link>
                        </span>

                        <span className="material-symbols-outlined" id="sized">
                            <Link to="/search">search</Link>
                        </span>
                    </div>

                </nav>
            </header >
        </>
    )
}