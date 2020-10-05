
import React, { Component ,select } from 'react'
import { Form ,Dropdown, Container, Button, Grid, Header, Image, Message, Segment} from 'semantic-ui-react'
import  Login from './../features/auth/Login'
import axios from 'axios';

// import { Form, Segment, Grid, Button, Divider, Container} from 'semantic-ui-react';
 

const api = axios.create({
baseURL:`http://localhost:3000/all`
})



export default class RegisterPage extends Component {
 
    constructor(props) { 
      super(props);
      this.state = {
        name:'',
        username:'',
        email:'',
        role:'',
        roles:[],
        password:'',
        list:[],
      }
      api.get('/').then(res => {
        console.log(res.data)
        this.setState({roles: res.data})
      })
      
    }
   
 
 

  // handleSubmit = (e) => this.setState({name:'', username:'', email: '',roles:'', password:''})

 registerTest =(e) => {
 

    e.preventDefault()
    let request = {
      name: this.state.name,
      username: this.state.username,
      email: this.state.email,
      roles:[this.state.list],
      password: this.state.password
    }
    axios.post('http://localhost:3000/api/auth/signup', request)
    .then( resp => {
      alert('utilisateur enregistré')

     
      this.props.history.push('/Login');
    })
    .catch( err => {
      console.log(err);
    })
  }

 
 
  render() {
    const { roles} = this.state
   

    
 

    return ( 
      <div>
     <Container>
     <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
    <Header as='h2' color='pink' textAlign='center'>
     Signup to your account
  </Header>
  <Form size='large' onSubmit={(e) =>this.registerTest(e)}>
    <Segment stacked>
      <Form.Input fluid icon='user'
       iconPosition='left'
        placeholder='Name'
        name='name'
        id='inputName'
        value={this.state.name}
        onChange={(e) => this.setState({ name: e.target.value})}
       />
      <Form.Input
        fluid
        icon='user'
        iconPosition='left'
        placeholder='UserName'
        name='username'
        id='inputUserName'
        value={this.state.username}
        onChange={(e) => this.setState({ username: e.target.value})}
      />
      <Form.Input
        fluid
        icon='user'
        iconPosition='left'
        placeholder='Email'
        name='email'
        id='inputEmail'
        value={this.state.email}
        onChange={(e) => this.setState({ email: e.target.value})}
      />
       <Form.Field 
        fluid
        iconPosition='left' >
       <select 
       placeholder='select role'
        value={this.state.list}
        onChange={(e) => this.setState({ list: e.target.value})}
        multiple={false}>   
       {roles.map(roles => 
       <option key={roles.id}>{roles.name}</option>)}         
       </select>  
      </Form.Field>

      <Form.Input
           fluid
          icon='lock'
           iconPosition='left'
            placeholder='Password'
            name='password'
            type='password'
            id='inputPassword'
            value={this.state.password}
            onChange={(e) => this.setState({ password: e.target.value})}
          />

      <Button fluid size='large' onClick={this.handleSubmit} color='pink' content='Submit'>
      Signup
      </Button>
    </Segment>
  </Form>
</Grid.Column>
</Grid>
</Container>
  </div>
    )
  
  
  }
}















