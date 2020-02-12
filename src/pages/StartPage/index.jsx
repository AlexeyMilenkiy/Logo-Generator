import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import redirect from "../../utils/redirect";
import "./style.scss";

function StartPage({ setCompanyName }) {
  return (
    <Formik
      initialValues={{
        name: ""
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string()
          .min(1, "Minimum 8 number of characters")
          .max(10, "Max 10 number of characters")
          .required("Name is required")
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(false);
        setCompanyName(values.name);
        resetForm();
        window.localStorage.setItem("companyName", values.name);
        redirect("/colors");
      }}
    >
      {({ isSubmitting }) => (
        <Form className="StartPage-form">
          <div className="StartPage-form__container">
            <ErrorMessage
              className="StartPage-form__error"
              name="name"
              component="span"
            />
            <Field
              type="text"
              name="name"
              max="10"
              placeholder="Enter Your Business Name"
              className="StartPage-form__input"
            />
          </div>
          <button
            className="StartPage-form__btn"
            type="submit"
            disabled={isSubmitting}
          >
            Next
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default StartPage;
