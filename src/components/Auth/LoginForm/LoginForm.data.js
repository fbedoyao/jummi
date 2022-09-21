import * as Yup from "yup"

export function initialValues(){
    return {
        email: "",
        password: ""
    }
}

export function validationSchema(){
    return Yup.object({
        email: Yup.string().email("Invalid email").required("Email is a required field"),
        password: Yup.string().required("Password is a required field")
    })
}