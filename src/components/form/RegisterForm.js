import React, { Component } from 'react';
// import { createSheet } from '../SheetForm/sheetActions';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { Button, Segment, Form } from 'semantic-ui-react';
import TextInput from '../../app/common/form/TextInput';
import { connect } from 'react-redux';
import cuid from 'cuid';
import SelectInput from '../../app/common/form/SelectInput';
import sheetUsers from './../../features/sheets/sheetForm/sheetUsers';


const mapState = (state) => {
  const sheet = {};
  const currentUser = state.auth.currentUser;
  const selector = formValueSelector('sheet');
  const selectedRole = selector(state, 'role');
  return { sheet, currentUser, selectedRole };
};

// const actions = {
//   createSheet,
// };

export default class RegisterForm extends Component {
  onFormSubmit = (values) => {
    let newSheet = {
      id: cuid(),
      ...values,
      author: this.props.currentUser,
      dateCreated: new Date().toISOString(),
    };

    // this.props.createSheet(newSheet);
    this.props.history.push(`/fiches-techniques/${newSheet.id}`);
  };

  render() {
    const { handleSubmit, selectedRole } = this.props;
    return (
      <Segment>
        <Form onSubmit={handleSubmit(this.onFormSubmit)} autoComplete='off'>
          <Field
            name='name'
            placeholder='Name'
            component={TextInput}
          />
           <Field
            name='username'
            placeholder='Username'
            component={TextInput}
          />
           <Field
            name='email'
            placeholder='Email'
            component={TextInput}
          />

          <Field
            name='role'
            placeholder='Role'
            component={SelectInput}
            options={sheetUsers}
            selection
            
          />

      

          <Button type='submit' color='teal' content='Valider' />
        </Form>
      </Segment>
    );
  }
}

// export default connect(
//   mapState,
//   actions
// )(reduxForm({form: 'sheet'})(RegisterForm));
