import "./MainContent.css"
import { useState, useEffect } from "react"
import { ShoeType } from "../../types/ShoeType"
import requester from "../../utils/requester"
import Card from "../card/Card"

export default function MainContent() {

    let [shoes, setShoes] = useState<ShoeType[]>([])

    useEffect(() => {
        (async () => {
            try {

                const response = await requester("http://localhost:1337/last", "GET")
                const result: ShoeType[] = await response.json();

                setShoes(result)
            } catch (error) {
                alert(error)
            }
        })()
    }, [])

    return (
        <>
            <section id="home">
                <h1>"Welcome to "Street 4 You"</h1>

                {shoes.length != 0 ? (
                    <>
                        <h2>Last three added shoes.</h2>
                        <ul className="card-wrapper">
                            {shoes.map(shoe => <Card key={shoe._id} shoe={shoe} />)}
                        </ul>
                    </>
                ) : (<img src="https://d1nymbkeomeoqg.cloudfront.net/photos/28/53/406870_3175_XL.jpg" alt="no img" />)}
                <h2>Find your collectible shoes</h2>
                <h3>Add SHOES</h3>

            </section>
        </>

    )
}