import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const basicSchema = yup.object().shape({
    email: yup.string().email("Please enter valid email").required("Field Required"),
    age: yup.number().positive().integer().max(110).required("Field Required"),
    password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Field Required"),
    confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password doesn't match")
    .required("Field Required"),
});