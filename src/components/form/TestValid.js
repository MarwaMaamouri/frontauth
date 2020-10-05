import React from "react";
import { render } from "react-dom";
import { Formik, Field } from "formik";
import * as yup from "yup";
import { Button, Checkbox, Form } from "semantic-ui-react";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const TestValid = () => (
  <>
    <Formik
      initialValues={{
        firstname: "",
        lastname: ""
      }}
      onSubmit={values => {
        alert(JSON.stringify(values));
      }}
      validationSchema={yup.object().shape({
        firstname: yup.string().required("This field is required"),
        lastname: yup.string().required()
      })}
      render={({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit
      }) => {
        return (
          <Form>
            <Form.Field>
              <label>First Name</label>
              <input
                placeholder="First Name"
                name="firstname"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Form.Field>
            {touched.firstname && errors.firstname && (
              <div> {errors.firstname}</div>
            )}
            <Form.Field>
              <label>Last Name</label>
              <input
                placeholder="Last Name"
                name="lastname"
                
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Form.Field>
            {touched.lastname && errors.lastname && (
              <div> {errors.lastname}</div>
            )}
            <Form.Field>
              <Checkbox label="I agree to the Terms and Conditions" />
            </Form.Field>
            <Button type="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </Form>
        );
      }}
    />
  </>
);

export default TestValid;