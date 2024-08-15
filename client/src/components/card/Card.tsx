import styles from './Card.module.css';

import { Link } from "react-router-dom";
import { useLikes } from "../../hooks/useLikes";


export default function Card(props: any) {
    const [likes, setLikes, addLike, removeLike, user] = useLikes([], props.shoe._id)

    return (
        <li className="card">
            {true ? <> </> : setLikes}
            <img className={styles.images} src={props.shoe.imageUrl} alt="no img" />
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

            <div className={styles.buttons}>
                <Link to={`/details/${props.shoe._id}`} className="details-btn" >Details</Link>

                {user ?
                    <>
                        {user?.userId != props?.shoe?.owner ?
                            <>
                                {!likes?.includes(user?.userId) ?
                                    <a className="details-btn" onClick={() => addLike(props.shoe._id)} >Like</a>
                                    :

                                    <a className="details-btn" onClick={() => removeLike(props.shoe._id)}>Unlike</a>
                                }
                            </>
                            : <></>
                        }
                    </>
                    : <></>
                }

            </div>

            <div className={styles.likes}>
                <p>{likes.length}</p>
                <span className="material-symbols-outlined">
                    thumb_up
                </span>
            </div>
        </li>
    );
}
