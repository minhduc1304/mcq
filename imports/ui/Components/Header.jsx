import React from 'react';
import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import AppBar from 'material-ui/AppBar';
import LoginDialog from './LoginDialog.jsx';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

export default class Header extends React.Component {

handleLogOut(event){
  event.preventDefault()
   Meteor.logout();
 }

  render(){
    return(
      <AppBar
        title="Online-Quiz"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        iconElementRight={!this.props.user ? <LoginDialog/> : <RaisedButton label="Logout" secondary={true} onClick = {this.handleLogOut.bind(this)}/>}
      />
    )
  }
}

Header.propTypes = {
    user: React.PropTypes.object,
}

export default createContainer(() => {
  return {
    user: Meteor.user(),
  };
}, Header);
