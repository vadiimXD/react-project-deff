import { useEffect, useState } from "react";
import requester from "../utils/requester";
import { getUser } from "../utils/authUtil";
import { AuthType } from "../types/AuthType";

export function useLikes(initialValue: any, shoeId: string) {
    const [likes, setLikes] = useState<any>(initialValue)
    const user:AuthType = getUser()

    useEffect(() => {
        (async () => {
            try {

                const response = await requester(`http://localhost:1337/likes/${shoeId}`, "GET")
                const result = await response.json();

                setLikes(result)
            } catch (error) {
                alert(error)
            }
        })()

    }, [])

    async function addLike(shoeId: string) {
        try {
            const response = await requester("http://localhost:1337/like", "POST", true, { shoeId, userId: user.userId })
            const result = await response.json();
            setLikes(result)

        } catch (error) {
            alert(error)
        }
    }

    async function removeLike(shoeId: string) {
        try {
            const response = await requester("http://localhost:1337/unlike", "POST", true, { shoeId, userId: user.userId })
            const result = await response.json();
            setLikes(result)
        } catch (error) {
            alert(error)
        }
    }

    return [
        likes,
        setLikes,
        addLike,
        removeLike,
        user,
    ]
}

