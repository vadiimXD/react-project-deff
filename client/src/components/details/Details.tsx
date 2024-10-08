import { Link, useNavigate, useParams } from "react-router-dom";
import "./Details.css"
import { useEffect, useState } from "react";
import requester from "../../utils/requester";
import { ShoeType } from "../../types/ShoeType";
import { AuthType } from "../../types/AuthType";
import { deleteHandler } from "../../utils/formUtils";

export default function Details() {
    const navigate = useNavigate()

    const [shoe, setShoe] = useState<ShoeType>()
    const params = useParams();
    const stringAuth: any = localStorage.getItem("auth");
    const auth: AuthType = JSON.parse(stringAuth)
    const [error, setError] = useState<boolean | string>(false)

    useEffect(() => {
        (async () => {
            try {
                const response = await requester(`http://localhost:1337/details/${params.shoeId}`, "GET")
                const result = await response.json();
                setShoe(result)
            } catch (error) {
                setError("An error occurred while executing the request!")
            }
        })()
    }, [])

    return (
        <section id="details">
            {error ? <p id="error">{error}</p> : <></>}

            <div id="details-wrapper">
                <p id="details-title">Shoe Details</p>
                <div id="img-wrapper">
                    <img src={shoe?.imageUrl} alt="no img" />
                </div>
                <div id="info-wrapper">
                    <p>
                        Brand: <span id="details-brand">{shoe?.brand}</span>
                    </p>
                    <p>
                        Model: <span id="details-model">{shoe?.model}</span>
                    </p>
                    <p>
                        Release date: <span id="details-release">{shoe?.release}</span>
                    </p>
                    <p>
                        Price: <span id="details-value">{shoe?.price}$</span>
                    </p>
                </div>
                {auth?.userId == shoe?.owner ? (<div id="action-buttons">
                    <Link to={`/edit/${shoe?._id}/${shoe?.owner}`} id="edit-btn">
                        Edit
                    </Link>
                    <a  onClick={()=>deleteHandler(shoe?._id,navigate,setError)} id="delete-btn">
                        Delete
                    </a>
                </div>) : <></>}

            </div>
        </section>

    );
}
