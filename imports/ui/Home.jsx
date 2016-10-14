import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import { createContainer } from 'meteor/react-meteor-data';
import { Mongo } from 'meteor/mongo';

export default class Home extends Component{

  render(){
    return(
      <div>
        <h1>Home Page</h1>
      </div>
    );
  }
}
