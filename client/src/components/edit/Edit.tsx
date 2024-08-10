import { useEffect, useState } from "react";
import "./Edit.css"
import requester from "../../utils/requester";
import { useParams } from "react-router-dom";
import { changeHandler, editFormSubmitHandler } from "../../utils/formUtils";

export default function Edit() {

    const params = useParams()

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
                alert(error)
            }
        })()
    }, [])

    return (
        <section id="edit">
            <div className="form">
                <h2>Edit shoes</h2>
                <form className="edit-form" onSubmit={(e) => editFormSubmitHandler(e, editFormValues)}>
                    <div>
                        <label htmlFor="shoe-brand">Shoe brand:</label>
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
