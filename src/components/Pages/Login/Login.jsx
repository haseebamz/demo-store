import React, { useContext } from "react";
import styles from "./Login.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router";
import { AuthContext } from "../../AuthContext/AuthProvider";
import { toast } from "react-toastify";

function Login() {
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const initialValues = {
    id: "",
  };

  const validationSchema = Yup.object({
    id: Yup.number()
      .typeError("ID must be a number")
      .min(0, "ID must be 0 or greater")
      .max(10, "ID must be less than or equal to 10")
      .required("ID is required"),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/users/${values.id}`
      );
      const userData = response.data;

      if (!userData) {
        toast.error("Invalid ID or user not found!");
        setSubmitting(false);
      } else {
        toast.success("Login successful!");
        localStorage.setItem("user", JSON.stringify(userData));
        setUser(userData);

        setSubmitting(false);
        resetForm();

        navigate("/");
      }
    } catch (error) {
      console.error(error);
        toast.error("Failed to Login");
    }
  };

  return (
    <div className={styles.loginWrapper}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h3>Login</h3>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <label htmlFor="id">ID*</label>
                  <Field name="id" id="id" className="form-control"></Field>
                  <ErrorMessage
                    name="id"
                    component="div"
                    className="errorMessage"
                  />

                  <button
                    className="CustomBtn mt-4 "
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Logging in..." : "SIGN IN"}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
