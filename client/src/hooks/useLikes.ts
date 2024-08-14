import { useEffect, useState } from "react";
import requester from "../utils/requester";


export function useLikes(initialValue: any, shoeId: string) {
    const [likes, setLikes] = useState(initialValue)
    const userStringify: any = localStorage.getItem("auth")
    const user = JSON.parse(userStringify)

    useEffect(() => {
        (async () => {

            const response = await requester(`http://localhost:1337/likes/${shoeId}`, "GET")
            const result = await response.json();

            setLikes(result)
        })()

    }, [])

    async function addLike(shoeId: string) {
        console.log(shoeId)

        const response = await requester("http://localhost:1337/like", "POST", true, { shoeId, userId: user.userId })
        const result = await response.json();
        setLikes(result)
    }

    async function removeLike(shoeId: string) {
        console.log(shoeId)

        const response = await requester("http://localhost:1337/unlike", "POST", true, { shoeId, userId: user.userId })
        const result = await response.json();
        setLikes(result)
    }


    return [
        likes,
        setLikes,
        addLike,
        removeLike
    ]
}

