import React from 'react';
import { Form } from 'semantic-ui-react';

const Test = ({
  input,
  width,
  type,
  placeholder,
  meta: { touched, error },
}) => {
  return (
    <Form.Field error={touched && !!error} width={width}>
      <input {...input} placeholder={placeholder} type={type} />
      {touched && error && (
        <div
          className='ui pointing above prompt label'
          id='form-input-first-name-error-message'
          role='alert'
          aria-atomic='true'
        >
          {error}
        </div>
      )}
    </Form.Field>
  );
};

export default Test;
