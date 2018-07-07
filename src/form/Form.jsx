import React from "react";
import { Field, reduxForm } from "redux-form";

import { Input, Select } from "./";

const required = value =>
  value || typeof value === "number" ? undefined : "Required";

const Form = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="username"
        type="text"
        component={Input}
        label="Username"
        validate={[required]}
      />

      <Field
        name="fruits"
        component={Select}
        label="Fruits"
        validate={[required]}
      >
        <option value="">Select a Fruit</option>
        <option value="apple">Apple</option>
        <option value="bannana">Bannana</option>
      </Field>

      <div>
        <button type="submit" disabled={submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "Form"
})(Form);
