import { LoginType } from "../types/LoginType";
import { RegisterType } from "../types/RegisterType";
import requester from "./requester";

async function registerFormSubmitHandler(e: any, values: RegisterType) {
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

        console.log(result)
        values.email = ""
        values.password = ""
        values.repassword = ""

    } catch (error) {
        console.log(error)
    }
}

async function loginFormSubmitHandler(e: any, values: LoginType) {
    e.preventDefault();
    console.log(values.email)
    console.log(values.password)

    try {
        const response = await requester("http://localhost:1337/login", "POST", true, { email: values.email, password: values.password})

        const result = await response.json()

        console.log(result)
        values.email = ""
        values.password = ""
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


export {
    registerFormSubmitHandler,
    loginFormSubmitHandler,
    changeHandler
}