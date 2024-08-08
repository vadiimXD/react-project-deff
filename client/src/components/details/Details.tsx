import { useParams } from "react-router-dom";
import "./Details.css"
import { useEffect, useState } from "react";
import requester from "../../utils/requester";
import { ShoeType } from "../../types/ShoeType";

export default function Details() {
    const [shoe, setShoe] = useState<ShoeType>()
    const params = useParams();


    useEffect(() => {
        (async () => {
            try {
                const response = await requester(`http://localhost:1337/details/${params.shoeId}`, "GET")
                const result = await response.json();
                setShoe(result)
            } catch (error) {
                alert(error)
            }
        })()
    }, [])

    return (
        <section id="details">
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
                <div id="action-buttons">
                    <a href="" id="edit-btn">
                        Edit
                    </a>
                    <a href="" id="delete-btn">
                        Delete
                    </a>
                </div>
            </div>
        </section>

    );
}
