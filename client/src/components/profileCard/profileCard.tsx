import { Link } from "react-router-dom";

export default function ProfileCard(props: any) {
    console.log(props)
    return (
        <div className="shoe">
            <Link to={`/details/${props?.shoe?._id}`}>
            <img src={props?.shoe?.imageUrl} alt="Shoe 1" />
            </Link>
            <div className="shoe-info">
                <h3>{props?.shoe?.brand}</h3>
                <p>{props?.shoe?.model}</p>
            </div>
        </div>
    );
}
