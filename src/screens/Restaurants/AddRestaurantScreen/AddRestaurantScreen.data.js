import * as Yup from "yup"

export function initialValues() {
    return {
        name: "",
        address: "",
        phone: "",
        email: "",
        description: "",
        location: null,
        images: []
    }
}

export function validationSchema(){
    return Yup.object({
        name: Yup.string().required("Required field"),
        address: Yup.string().required("Required field"),
        phone: Yup.string().required("Required field"),
        email: Yup.string()
            .email("Invalid email")
            .required("Required field"),
        description: Yup.string().required("Required field"),
        location: Yup.object().required("Location is required"),
        images: Yup.array().min(1, "At least 1 image is required").required("Image required")
    })
}