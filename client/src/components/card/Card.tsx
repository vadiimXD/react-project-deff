import { Link } from "react-router-dom";

export default function Card(props: any) {
    
    return (
        <li className="card">
            <img src={props.shoe.imageUrl} alt="no img" />
            <p>
                <strong>Brand: </strong>
                <span className="brand">{props.shoe.brand}</span>
            </p>
            <p>
                <strong>Model: </strong>
                <span className="model">{props.shoe.model}</span>
            </p>
            <p>
                <strong>Value:</strong>
                <span className="value">{props.shoe.price}$</span>
            </p>
            <Link to={`/details/${props.shoe._id}`} className="details-btn" >Details</Link>
            <Link to={`/details/${props.shoe._id}`} className="details-btn" >Like</Link>
        </li>
    );
}
