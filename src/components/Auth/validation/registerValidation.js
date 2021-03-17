import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  firstName: Yup.string("First name must be a string")
    .trim()
    .required("First name is required")

    .matches(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g, "Invalid name")
    .min(3, "First name must be at least 3 characters")
    .max(20, "First name must be lower than 20 characters"),
  email: Yup.string()
    .email("Enter valid email Address")
    .required("Email is required")

    .matches(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gim,
      "Input valid email"
    ),
  lastName: Yup.string()
    .matches(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g, "Invalid name")
    .min(3, "Last name must be at least 3 characters")
    .required("LastName is required")

    .max(20, "password must be lower than 20 characters"),
  password: Yup.string()
    .trim()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(12, "Password must be lower than 12 characters"),
});
export default validationSchema;
