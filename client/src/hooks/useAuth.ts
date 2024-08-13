import { useContext, useState, useEffect } from "react"
import { AuthContext } from "../contexts/AuthContext"

export function useAuth(initialValue:any) {

    const context = useContext(AuthContext)
    const [isLogged, setIsLogged] = useState(initialValue)
    const authStringify: any = localStorage.getItem("auth")
    const auth = JSON.parse(authStringify)

    useEffect(() => {
        if (!auth) {
            return setIsLogged(auth)
        }

        setIsLogged({})

    }, [context])

    return [
        isLogged,
        setIsLogged,
        context
    ]
}