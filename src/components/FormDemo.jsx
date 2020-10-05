import React from 'react';
import {Card, TextArea,Checkbox,Button , Form } from 'semantic-ui-react';
import {  Formik, Field, yupToFormErrors} from 'formik'
import InvestmentDetails  from './form/InvestmentDetails';
import * as yup from "yup";
 
const initialValues =(props)=> InvestmentDetails ={
  fullName:'',
  initialInverstment:undefined,
  inverstementRisk:[],
  commentAboutInverstementRisk:'',
  dependents: -1,
  acceptedTermsAndConditions:false
};
 function FormDemo() {
  return (  
    <Card>
    <Card.Content>
      <Card.Header>New Account</Card.Header>

      <Formik initialValues={initialValues} 
             onSubmit={() => {}}
             validationSchema={yup.object().shape({
              fullName: yup.string().required("this field is required")
             })}           
             >

              {({values}) => (
                <Form>
                  <Field name='fullName' type="string"></Field>
                  <Field name='initialInverstment' type="number"></Field>
                  <Field name='inverstementRisk' value="High" type="checkbox"/>
                  <Field name='inverstementRisk' value="Medium" type="checkbox"/>
                  <Field name='inverstementRisk' value="Low" type="checkbox"/> 
                  <Field name='commentAboutInvestmentRisk'  multiline row={3} rowsMax={10} ></Field> 
                  <Field name='dependents' as="select">   
                  <option value={0}>0</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  </Field>    
                  <Field name="acceptedTermsAndConditions" type="checkbox" >                  
                  </Field> 
                  <pre>{JSON.stringify(values, null, 4)}</pre>               
                </Form>
              )}
     </Formik>
    </Card.Content>  
  </Card>
  );
}

export default FormDemo;

