import { json, useNavigate } from "react-router-dom";
import { CreateType } from "../types/CreateType";
import { LoginType } from "../types/LoginType";
import { RegisterType } from "../types/RegisterType";
import requester from "./requester";
import { AuthType } from "../types/AuthType";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const imageRegex = /^https?:\/\//

async function registerFormSubmitHandler(e: any, values: RegisterType, setState: any, navigate: Function, setError: Function) {
    e.preventDefault()
    if (!values.email || !values.password || !values.repassword) return setError("Empty fields")

    if (!emailRegex.test(values.email)) return setError("Invalid Email")


    if (values.password.length < 3) return setError("Minimum password length is 3!")

    if (values.password != values.repassword) return setError("Passwords do not match!")

    if (values.password.length < 3) return setError("Minimum re-password length is 3!")

    try {

        const response = await requester("http://localhost:1337/register", "POST", true, { email: values.email, password: values.password, repassword: values.repassword })

        const result = await response.json()
        setState(result)
        localStorage.setItem("auth", JSON.stringify(result))
        console.log(result, "result")
        navigate("/")
    } catch (error) {
        setError("An error occurred while executing the request!")
    }
}

async function loginFormSubmitHandler(e: any, values: LoginType, setState: any, navigate: Function, setError: Function) {
    e.preventDefault();

    if (!values.email || !values.password) return setError("Empty fields")

    if (!emailRegex.test(values.email)) return setError("Invalid Email")

    if (values.password.length < 3) return setError("Minimum password length is 3!")

    try {
        const response = await requester("http://localhost:1337/login", "POST", true, { email: values.email, password: values.password })

        const result: any = await response.json()
        setState(result)
        localStorage.setItem("auth", JSON.stringify(result))
        console.log(result)
        navigate("/")
    } catch (error) {
        setError("An error occurred while executing the request!")
    }
}

function changeHandler(e: any, setFormValues: any) {
    setFormValues((oldValues: any) => ({
        ...oldValues,
        [e.target.name]: e.target.value,
    }));
};

async function createFormSubmitHandler(e: any, values: CreateType, navigate: Function, setError: Function) {
    e.preventDefault();

    if (!values.brand || !values.imageUrl || !values.model || !values.price || !values.release) return setError("Empty fields!");

    if (!imageRegex.test(values.imageUrl)) return setError("Invalid image url!")

    if (values.brand.length < 3) return setError("Minimum brand length is 3!")

    if (values.model.length < 2) return setError("Minimum model length is 2!")

    if (Number(values.price) < 0) return setError("Invalid price!")

    const stringAuth: any = localStorage.getItem("auth");
    const auth: AuthType = JSON.parse(stringAuth)
    values.owner = auth.userId

    try {
        const response = await requester("http://localhost:1337/create", "POST", true, values)
        const result = await response.json();
        console.log(result)
        navigate("/dashboard")
    } catch (error) {
        setError("An error occurred while executing the request!")
    }
}

async function editFormSubmitHandler(e: any, values: CreateType, navigate: Function, setError: Function) {
    e.preventDefault();

    if (!values.brand || !values.imageUrl || !values.model || !values.price || !values.release) return setError("Empty fields!");

    if (!imageRegex.test(values.imageUrl)) return setError("Invalid image url!")

    if (values.brand.length < 3) return setError("Minimum brand length is 3!")

    if (values.model.length < 2) return setError("Minimum model length is 2!")

    if (Number(values.price) < 0) return setError("Invalid price!")

    try {
        const response = await requester("http://localhost:1337/edit", "POST", true, values)
        const result = await response.json();
        console.log(result)
        navigate("/dashboard")
    } catch (error) {
        setError("An error occurred while executing the request!")
    }
}

async function searchSubmitHandler(e: any, brand: string, setShoes: Function, setError: Function) {
    e.preventDefault()
    console.log(brand)
    try {
        const response = await requester(`http://localhost:1337/search`, "POST", true, { brand, })
        const result = await response.json()
        setShoes(result)
    } catch (error) {
        setError("An error occurred while executing the request!")
    }
}

async function deleteHandler(shoeId: any, navigate: Function, setError: Function) {
    try {
        const response = await requester(`http://localhost:1337/delete/${shoeId}`, "DELETE")
        const result = await response.json()
        console.log(result)
        navigate("/")
    } catch (error) {
        setError("An error occurred while executing the request!")

    }
}

export {
    registerFormSubmitHandler,
    loginFormSubmitHandler,
    createFormSubmitHandler,
    editFormSubmitHandler,
    searchSubmitHandler,
    deleteHandler,
    changeHandler
}