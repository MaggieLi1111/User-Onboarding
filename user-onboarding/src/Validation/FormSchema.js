import * as yup from "yup";


const formSchema = yup.object().shape({
    first_name:yup
    .string()
    .trim()
    .required("First name is required!"),
    last_name: yup
    .string()
    .trim()
    .required("Last name is required!"),
    email:yup
    .string()
    .trim()
    .email("Must be valid formatting!")
    .required("Email is require!"),
    role:yup
    .string()
    .oneOf( ["warrior", "wizard", "elf"], "You must pick one of three as your role!"),
    password:yup
    .string()
    .trim()
    .required("Password is required!")
    .min(6, "Password must be at least 6 characters!")
    .matches(/[a-z]/, "at least one lowercase character"),
    termsOfService:yup
    .boolean()
    .oneOf( [true], "You must accept the terms of service!")
});

export default formSchema;