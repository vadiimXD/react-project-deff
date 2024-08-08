import { useEffect, useState } from "react"
import "./Dashboard.css"
import Card from "../card/Card"
import requester from "../../utils/requester"
import { ShoeType } from "../../types/ShoeType"

export default function Dashboard() {

    let [shoes, setShoes] = useState<ShoeType[]>([])

    useEffect(() => {
        (async () => {
            try {

                const response = await requester("http://localhost:1337/catalog", "GET")
                const result: ShoeType[] = await response.json();

                setShoes(result)
            } catch (error) {
                alert(error)
            }
        })()
    }, [])

    return (
        <section id="dashboard">
            <h2>Collectibles</h2>

            {shoes.length != 0 ? (<ul className="card-wrapper">
                {shoes.map(shoe => <Card key={shoe._id} shoe={shoe} />)}
            </ul>) : (<h2>No collectible shoes added yet.</h2>)}

        </section>

    )
}