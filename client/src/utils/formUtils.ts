import { RegisterType } from "../types/RegisterType";

async function registerFormSubmitHandler(e: any, values: RegisterType) {
    e.preventDefault()
    if (!values.email || !values.password || !values.repassword) {
        return alert("NO!")
    }
    try {

        const response = await fetch(" http://localhost:1337/register", {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: values.email, password: values.password, repassword: values.repassword })
        })

        const result = await response.json()

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


export {
    registerFormSubmitHandler,
    changeHandler
}