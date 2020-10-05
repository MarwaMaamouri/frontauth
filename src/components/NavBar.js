import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'


import { NavLink } from 'react-router-dom';



export default class NavBar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
       {/* <Menu.Item
         as={NavLink} to="/home"
          name='home'
          active={activeItem === 'home'}
          content='Home'
          onClick={this.handleItemClick}
        />    */}
        <Menu.Item
          as={NavLink} to="/login"
          name='SignIn'
          active={activeItem === 'SignIn'}
          content='SignIn'
          onClick={this.handleItemClick}
        />
        {/* <Menu.Item
          as={NavLink} to="/login2"
          name='login2'
          active={activeItem === 'login2'}
          content='log Inn'
          onClick={this.handleItemClick}
        /> */}
        
        {/* <Menu.Item
           as={NavLink} to="/logout"
          name='logout'
          active={activeItem === 'logout'}
          content='log Out'
          onClick={this.handleItemClick}
        /> */}

         {/* <Menu.Item
         as={NavLink} to="/reset"
          name='reset'
          active={activeItem === 'reset'}
          content='Reset'
          onClick={this.handleItemClick}
        /> */}
       
       <Menu.Item
         as={NavLink} to="/register"
          name='SignUp'
          active={activeItem === 'SignUp'}
          content='SignUp'
          onClick={this.handleItemClick}
        />
        <Menu.Item
         as={NavLink} to="/RoleList"
          name='roleList'
          active={activeItem === 'roleList'}
          content='RoleList'
          onClick={this.handleItemClick}
        />
      
      </Menu>
    )
  }
}
 