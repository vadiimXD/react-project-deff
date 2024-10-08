import "./Edit.css"
import { useEffect, useState } from "react";
import requester from "../../utils/requester";
import { useNavigate, useParams } from "react-router-dom";
import { changeHandler, editFormSubmitHandler } from "../../utils/formUtils";


export default function Edit() {
    const navigate = useNavigate()
    const params = useParams()

    const [error, setError] = useState<boolean | string>(false)

    const [editFormValues, setEditForm] = useState({
        brand: "",
        model: "",
        imageUrl: "",
        release: "",
        price: "",
        owner: ""
    })

    useEffect(() => {
        (async () => {
            try {

                const response = await requester(`http://localhost:1337/details/${params.shoeId}`, "GET")
                const result = await response.json();
                setEditForm(result)

            } catch (error) {
                setError("An error occurred while executing the request!")
            }
        })()
    }, [])


    return (
        <section id="edit">

            {error ? <p id="error">{error}</p> : <></>}

            <div className="form">
                <h2>Edit shoes</h2>
                <form className="edit-form" onSubmit={(e) => editFormSubmitHandler(e, editFormValues, navigate, setError)}>
                    <div>
                        <label htmlFor="shoe-brand">Shoe brand:</label>
                        <span className="material-symbols-outlined" id="black">
                            steps
                        </span>
                        <input
                            type="text"
                            name="brand"
                            id="shoe-brand"
                            placeholder="Nike ..."
                            value={editFormValues.brand}
                            onChange={(e) => changeHandler(e, setEditForm)}
                        />
                    </div>
                    <div>
                        <label htmlFor="shoe-model">Shoe model:</label>
                        <span className="material-symbols-outlined" id="black">
                            steps
                        </span>
                        <input
                            type="text"
                            name="model"
                            id="shoe-model"
                            placeholder="Air Force ..."
                            value={editFormValues.model}
                            onChange={(e) => changeHandler(e, setEditForm)}

                        />
                    </div>

                    <div>
                        <label htmlFor="shoe-img">Shoe image:</label>
                        <span className="material-symbols-outlined" id="black">
                            image
                        </span>
                        <input
                            type="text"
                            name="imageUrl"
                            id="shoe-img"
                            placeholder="https://media.wired.com/photos/63728604691ed08cc4b98976/master/pass/Nike-Swoosh-News-Gear.jpg"
                            value={editFormValues.imageUrl}
                            onChange={(e) => changeHandler(e, setEditForm)}

                        />
                    </div>

                    <div>
                        <label htmlFor="shoe-release">Release date:</label>
                        <span className="material-symbols-outlined" id="black">
                            calendar_month
                        </span>
                        <input
                            type="date"
                            name="release"
                            id="shoe-release"
                            placeholder="08/02/2024 ..."
                            value={editFormValues.release}
                            onChange={(e) => changeHandler(e, setEditForm)}

                        />
                    </div>



                    <div>
                        <label htmlFor="shoe-price">Shoe price:</label>
                        <span className="material-symbols-outlined" id="black">
                            attach_money
                        </span>
                        <input
                            type="number"
                            name="price"
                            id="shoe-price"
                            placeholder="300$ ..."
                            value={editFormValues.price}
                            onChange={(e) => changeHandler(e, setEditForm)}

                        />
                    </div>
                    <button type="submit">Edit</button>
                </form>
            </div>
        </section>
    );
}
