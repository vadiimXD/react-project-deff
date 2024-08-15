import { useState } from "react"
import "./Create.css"
import { changeHandler, createFormSubmitHandler } from "../../utils/formUtils"
import { useNavigate } from "react-router-dom"

export default function Create() {
    const navigate = useNavigate()
    const [error, setError] = useState(false)

    let [createFormValues, setCreateForm] = useState({
        brand: "",
        model: "",
        imageUrl: "",
        release: "",
        price: "",
        owner: ""
    })

    return (
        <section id="create">
            {error ? <p id="error">{error}</p> : <></>}

            <div className="form">
                <h2>Add shoes</h2>
                <form className="create-form" onSubmit={(e) => createFormSubmitHandler(e, createFormValues,navigate,setError)}>
                    <div>
                        <label htmlFor="shoe-brand">Shoe brand:</label>
                        <input
                            type="text"
                            name="brand"
                            id="shoe-brand"
                            placeholder="Nike ..."
                            value={createFormValues.brand}
                            onChange={(e) => changeHandler(e, setCreateForm)}
                        />
                    </div>
                    <div>
                        <label htmlFor="shoe-model">Shoe model:</label>
                        <input
                            type="text"
                            name="model"
                            id="shoe-model"
                            placeholder="Air Force ..."
                            value={createFormValues.model}
                            onChange={(e) => changeHandler(e, setCreateForm)}

                        />
                    </div>

                    <div>
                        <label htmlFor="shoe-img">Shoe image:</label>
                        <input
                            type="text"
                            name="imageUrl"
                            id="shoe-img"
                            placeholder="https://media.wired.com/photos/63728604691ed08cc4b98976/master/pass/Nike-Swoosh-News-Gear.jpg"
                            value={createFormValues.imageUrl}
                            onChange={(e) => changeHandler(e, setCreateForm)}

                        />
                    </div>

                    <div>
                        <label htmlFor="shoe-release">Release date:</label>
                        <input
                            type="date"
                            name="release"
                            id="shoe-release"
                            placeholder="08/02/2024 ..."
                            value={createFormValues.release}
                            onChange={(e) => changeHandler(e, setCreateForm)}

                        />
                    </div>



                    <div>
                        <label htmlFor="shoe-price">Shoe price:</label>
                        <input
                            type="number"
                            name="price"
                            id="shoe-price"
                            placeholder="300$ ..."
                            value={createFormValues.price}
                            onChange={(e) => changeHandler(e, setCreateForm)}

                        />
                    </div>
                    <button type="submit">ADD</button>
                </form>
            </div>
        </section>

    )
}