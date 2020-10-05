import React from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';
import * as yup from "yup";

import {
    Segment,
    Container,
    Header,
    Image,
    Button,
    Icon
  } from 'semantic-ui-react';
// Here is an example of a form with an editable list.
// Next to each input are buttons for insert and remove.
// If the list is empty, there is a button to add an item.
 const FriendList = () => (
  <div>
    <h1>Friend List</h1>
    <Formik
    //   initialValues={{ friends: ['jared', 'ian', 'brent'] }}
    initialValues={{
       firstname:"marwa",
       lastname:"maamouri"         
      }}
      onSubmit={values =>
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
        }, 500)
      }
      validationSchema={yup.object().shape({
       firstname: yup.string().required("This field is required"),
       lastname: yup.string().required(),
        // lastname: yup.string().required()
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
          <FieldArray
            // name="friends"
            name = "firstname"
            render={arrayHelpers => (
              <div>
                {values.firstname && values.firstname.length > 0 ? (
                  values.name.map((firstname, index) => (
                    <div key={index}>
                      {/* <Field name={`friends.${index}`}  */}
                      <Field name ={`firstname.${index}`} 

                          placeholder="First Name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        
                        />
                        {touched.firstname && errors.firstname && (
                       <div> {errors.firstname}</div>
                        )}

                        {/* <Field name={`lastname.${index}`} 
                        placeholder="lastname"
                        onChange={handleChange}
                        onBlur={handleBlur}/> 
                        {touched.lastname && errors.lastname  && (
                       <div> {errors.lastname }</div>
                        )} */}

                       <button
                        type="button"
                        onClick={() => arrayHelpers.remove(index)       
                        } // remove a friend from the list
                       >
                        -
                       </button>

                       <button
                        type="button"
                        onClick={() => arrayHelpers.insert(index, '') 
                         } // insert an empty string at a position
                       >
                        +
                       </button>
                      
                    </div>
                  ))
                ) : (
                  <button type="button" onClick={() => arrayHelpers.push('') }>
                    {/* show this when user has removed all friends from the list */}
                    Add a friend
                  </button>
                )}
                <div>
                  <button  type="submit" onClick={handleSubmit}>Submit</button>
                </div>
              </div>
            )}
          />
        </Form>
      )}
    }
    />
  </div>
);

export default FriendList;