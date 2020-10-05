import React, { Component } from 'react'
import axios from 'axios';
import { Container } from 'semantic-ui-react';
import { Grid, Header} from 'semantic-ui-react'
const api = axios.create({
    baseURL:`http://localhost:3000/all`,
    
    })

export default class RoleList extends Component {

    state = {
        roles: [] ,
        accessToken:'', 
      }
    constructor() {
      super();
      api.get('/').then(res => {
        console.log(res.data)
        this.setState({roles: res.data})
      })
    }
    
    loginTest=(e)=>{
      e.preventDefault()
      
      axios.get('http://localhost:3000/all',{'headers': {
        'x-access-token':localStorage.getItem('token')
        } })
      .then( res => {
        this.setState({roles: res.data})
       
      })
      .catch( err => {
        console.log(err);
      })
        
     
    }


    render() {


      
        return (
            <div>
              <Container>
              <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
    <Header as='h2' color='pink' textAlign='center'>
    Roles
  </Header>
                       {/* <h1 color='pink'>Roles</h1> */}

                    {this.state.roles.map(role => <h2 key={role.id }> {role.name} </h2>)}
                    </Grid.Column>
</Grid>
              </Container>
            
         </div>




             










        );

      
    }
};


