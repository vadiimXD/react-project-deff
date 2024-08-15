import "./MainContent.css"
import { useState, useEffect } from "react"
import { ShoeType } from "../../types/ShoeType"
import requester from "../../utils/requester"
import Card from "../card/Card"
import { Link } from "react-router-dom"
import { AuthType } from "../../types/AuthType"
import { getUser } from "../../utils/authUtil"

export default function MainContent() {
    const user: AuthType = getUser()
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
                {user ?
                    <>
                        <h2>  <Link to={"/search"}>Find your collectible shoes</Link></h2>
                        <h3>  <Link to={"/create"}>Add shoes</Link></h3>
                    </>
                    :
                    <>
                        <h2>  <Link to={"/register"}>Register</Link></h2>
                        <h3>  <Link to={"/login"}>Login</Link></h3>
                    </>

                }


            </section>
        </>

    )
}