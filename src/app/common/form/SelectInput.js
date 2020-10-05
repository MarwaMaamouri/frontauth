import React from 'react';
import { Form, Label, Dropdown } from 'semantic-ui-react';

const SelectInput = ({
  input,
  placeholder,
  multiple,
  options,
  meta: { touched, error },
}) => {
  return (
    <Form.Field error={touched && !!error}>
      <Dropdown
        placeholder={placeholder}
        onChange={(e, data) => input.onChange(data.value)}
        fluid
        selection
        clearable
        search
        style={{ overflow: 'visible' }}
        options={options}
        multiple={multiple}
      />
      {touched && error && (
        <Label basic color='red'>
          {error}
        </Label>
      )}
    </Form.Field>
  );
};

export default SelectInput;
