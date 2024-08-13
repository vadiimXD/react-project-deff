import { json, useNavigate } from "react-router-dom";
import { CreateType } from "../types/CreateType";
import { LoginType } from "../types/LoginType";
import { RegisterType } from "../types/RegisterType";
import requester from "./requester";
import { AuthType } from "../types/AuthType";

async function registerFormSubmitHandler(e: any, values: RegisterType, setState: any) {
    e.preventDefault()
    if (!values.email || !values.password || !values.repassword) {
        return alert("NO!")
    }

    if (values.password != values.repassword) {
        return alert("NO!")
    }

    try {

        const response = await requester("http://localhost:1337/register", "POST", true, { email: values.email, password: values.password, repassword: values.repassword })

        const result = await response.json()
        setState(result)
        localStorage.setItem("auth", JSON.stringify(result))
        console.log(result)
        values.email = ""
        values.password = ""
        values.repassword = ""

    } catch (error) {
        console.log("err")
        console.log(error)
    }
}

async function loginFormSubmitHandler(e: any, values: LoginType, setState: any) {
    e.preventDefault();

    try {
        const response = await requester("http://localhost:1337/login", "POST", true, { email: values.email, password: values.password })

        const result: any = await response.json()
        setState(result)
        localStorage.setItem("auth", JSON.stringify(result))
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

function changeHandler(e: any, setFormValues: any) {
    setFormValues((oldValues: any) => ({
        ...oldValues,
        [e.target.name]: e.target.value,
    }));
};

async function createFormSubmitHandler(e: any, values: CreateType) {
    e.preventDefault();
    if (!values.brand || !values.imageUrl || !values.model || !values.price || !values.release) {
        return alert("NO!");
    }

    if (values.brand.length < 3) {
        return alert("noo");
    }

    if (values.model.length < 2) {
        return alert("no");
    }


    if (Number(values.price) < 0) {
        return alert("no!");
    }
    const stringAuth: any = localStorage.getItem("auth");
    const auth: AuthType = JSON.parse(stringAuth)
    values.owner = auth.userId

    try {
        const response = await requester("http://localhost:1337/create", "POST", true, values)
        const result = await response.json();
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

async function editFormSubmitHandler(e: any, values: CreateType) {
    e.preventDefault();
    if (!values.brand || !values.imageUrl || !values.model || !values.price || !values.release) {
        return alert("NO!");
    }

    if (values.brand.length < 3) {
        return alert("noo");
    }

    if (values.model.length < 2) {
        return alert("no");
    }


    if (Number(values.price) < 0) {
        return alert("no!");
    }

    try {
        const response = await requester("http://localhost:1337/edit", "POST", true, values)
        const result = await response.json();
        console.log(result)
    } catch (error) {
        alert(error)
    }
}

async function searchSubmitHandler(e: any, brand: string, setShoes: Function) {
    e.preventDefault()
    console.log(brand)
    try {
        const response = await requester(`http://localhost:1337/search`, "POST", true, { brand, })
        const result = await response.json()
        setShoes(result)
    } catch (error) {
        alert(error)
    }
}

async function deleteHandler(shoeId: any) {
    try {
        const response = await requester(`http://localhost:1337/delete/${shoeId}`, "DELETE")
        const result = await response.json()
        console.log(result)
    } catch (error) {
        alert(error)
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