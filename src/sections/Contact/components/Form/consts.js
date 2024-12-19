import * as yup from "yup";

export const schema = yup
  .object({
    firstName: yup.string().required("First name is required").min(3, "Min 3 characters"),
    lastName: yup.string().required("Last name is required").min(3, "Min 3 characters"),
    email: yup.string().email("Enter a valid email").required("Email is required"),
    subject: yup.string().required("Subject is required").min(10, "Min 10 characters"),
    message: yup.string().required("Description is required").min(10, "Min 10 characters"),
  })
  .shape();
