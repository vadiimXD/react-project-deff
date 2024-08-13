import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"

export default function Header() {
    const context = useContext(AuthContext)
    const [isLogged, setIsLogged] = useState({})
    const authStringify: any = localStorage.getItem("auth")
    const auth = JSON.parse(authStringify)

    useEffect(() => {
        if (!auth) {
            return setIsLogged(auth)
        }

        setIsLogged({})

    }, [context])

    return (
        <>
            <header>

                <Link id="logo" to="/"
                ><img id="logo-img" src="https://cdn-icons-png.flaticon.com/512/1138/1138598.png" alt="no img"
                    /></Link>
                <nav>

                    {!!isLogged ? (
                        <div className="user">
                            <Link to="/profile">Profile</Link>
                            <Link to="/create">Add Pair</Link>
                            <a onClick={() => {
                                context?.setState(false)
                                localStorage.clear()
                            }}>Logout</a>
                        </div>
                    ) : (
                        <div className="guest">
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                        </div>
                    )}
                    <div>
                        <Link to="/dashboard">Dashboard</Link>
                        <Link to="/search">Search</Link>
                    </div>

                </nav>
            </header>
        </>
    )
}