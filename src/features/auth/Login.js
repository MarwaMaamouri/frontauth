import React, { Component } from 'react';
import { Button, Form, Grid, Header,  Message, Segment, Container} from 'semantic-ui-react'
import {Link } from "react-router-dom";
import axios from 'axios'





  export default class Login extends Component {
    
    constructor(props) { 
      super(props);
      this.state = {
        email:'',
        password:'',
        auth:false,
        store:null,
        token:'',
        currentUser:null,
        roles:[],
      }
    }
  
  loginTest = (e)=> {
    
    e.preventDefault()
    let request = {
      email:this.state.email,
      password:this.state.password
    }
    axios.post('http://192.168.2.177:3000/api/auth/signin', request)
    .then( resp => {
       
       this.setState({currentUser:resp.data.user})
       console.log('current user',this.state.currentUser)


      this.setState({token:resp.data.accessToken})
      this.setState({auth:resp.data.auth})
      console.log('token',this.state.token)
        


      console.log(this.state.auth)

      this.setState({roles:resp.data.user.role})
     this.state.roles.map((role) => {console.log(role.name)})

     console.log(resp.data.user.role.map((role) => role.name))  

     localStorage.setItem('token', resp.data.accessToken);   
     localStorage.setItem('role', resp.data.user.role.map((role) => role.name));
     localStorage.setItem('name', resp.data.user.name);
     localStorage.setItem('email', resp.data.user.email);
      
     alert('Vous êtes connecté avec succès')

      this.props.history.push('/RoleList');
     
    })
    .catch( err => {

      console.log(err);
    })
  }

  render() {
    const { email, password } = this.state
    return (
     <div>
        <Container>
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='pink' textAlign='center'>
        Log-in to your account
      </Header>
      <Form onSubmit={(e) =>this.loginTest(e)} size='large'>
        <Segment stacked>
          <Form.Input fluid icon='user' 
          iconPosition='left' 
          placeholder='E-mail address'
          name='email'
           value={email}
             id='inputEmail'
               
           onChange={(e) => this.setState({ email: e.target.value})} />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
            name='password'
            value={password}
            id='inputPassword'
            
            onChange={(e) => this.setState({ password: e.target.value})}
          />

          <Button  content='Submit'color='pink' fluid size='large'>
            Login
          </Button>

          
        </Segment>
      </Form>
      <Message>
        
        New to us? <Link to="/register">Sign Up</Link>
      </Message>
    </Grid.Column>
  </Grid>
  </Container>
  </div>
)
    }
  }



