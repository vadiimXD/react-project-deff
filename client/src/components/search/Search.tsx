import { useEffect, useState } from "react"
import "./Search.css"
import { changeHandler, searchSubmitHandler } from "../../utils/formUtils"
import Card from "../card/Card"
import { ShoeType } from "../../types/ShoeType"
import requester from "../../utils/requester"

export default function Search() {
    const [shoes, setShoes] = useState<ShoeType[] | []>([])
    const [brand, setBrand] = useState({ brand: "" })

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
        <section id="search">
            <h2>Search by Brand</h2>
            <form className="search-wrapper cf" onSubmit={(e) => searchSubmitHandler(e, brand.brand, setShoes)}>
                <input
                    id="#search-input"
                    type="text"
                    name="brand"
                    placeholder="Nike..."
                    required={true}
                    value={brand.brand}
                    onChange={(e) => changeHandler(e, setBrand)}
                />
                <button type="submit">Search</button>
            </form>
            <h3>Results:</h3>
            <div id="search-container">
                {shoes.length != 0 ? (<ul className="card-wrapper">
                    {shoes.map(shoe => <Card key={shoe._id} shoe={shoe} />)}
                </ul>) : (<h2>There are no results found.</h2>)}
            </div>
        </section>

    )
}