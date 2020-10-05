import React, { Component } from 'react';

import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

export default class Home extends Component {

    render() {
        return (
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
       <Grid.Column style={{ maxWidth: 450 }}>
        <Image src="/images/logoEnda.png" /> 
         </Grid.Column>
       </Grid>
        );
    }
}

