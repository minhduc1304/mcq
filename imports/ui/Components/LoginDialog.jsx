import {Accounts} from 'meteor/accounts-base';
import {Meteor} from 'meteor/meteor';
import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {Tabs, Tab} from 'material-ui/Tabs';

export default class LoginDialog extends React.Component {
  constructor() {
      super();
      this.handleDialog = this.handleDialog.bind(this);
      this.handleTabChange = this.handleTabChange.bind(this);
      this.state = {
          open: false,
      }
  };

  handleTabChange(shit){
      this.setState({value: shit});
  };

  handleDialog(){
    this.setState({value: "LogIn"});
    this.setState({open: !this.state.open});
  };

  createUser(event) {
      event.preventDefault();
      console.log(this);
      const email = this.refs.email.input.value.trim();
      const password = this.refs.password.input.value.trim();
      const profile = {};
      profile.fullname = this.refs.fullname.input.value.trim();
      Accounts.createUser({
          email: email,
          password: password,
          profile: profile
      }, (err) => {
          if (err)
              console.log('there was an error: ' + err)
          else {
              FlowRouter.go('/');
          }
      })
  }

  loginWithPassword(event) {
    event.preventDefault();
    console.log(this);
    const logInMail = this.refs.logInMail.input.value.trim();
    const logInPassword = this.refs.logInPassword.input.value.trim();
    Meteor.loginWithPassword(logInMail, logInPassword, (err) => {
        if (err)
            console.log('there was an error: ' + err.reason);
        else {
            FlowRouter.go('/');
        }
    })
}

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleDialog}
      />,
      <FlatButton
        label={this.state.value}
        primary={true}
        keyboardFocused={true}
        onClick={this.state.value == "LogIn" ? this.loginWithPassword.bind(this) : this.createUser.bind(this)}
      />,
    ];

    return (
      <div>
          <RaisedButton label="LogIn" secondary={true} onClick = {this.handleDialog}/>
             <Dialog
               actions={actions}
               modal={false}
               open={this.state.open}
               onRequestClose={this.handleDialog}
             >
             <Tabs onChange={this.handleTabChange.bind(this)}>
               <Tab label="LogIn" value="LogIn">
                 <div>
                   <TextField
                     floatingLabelText="Email"
                     ref="logInMail"
                   />
                   <br/>
                   <TextField
                     hintText="Password"
                     floatingLabelText="Password"
                     ref="logInPassword">
                     <input type="password" />
                   </TextField>
                 </div>
               </Tab>
               <Tab label="SignUp" value="SignUp">
                 <div>
                   <TextField
                     floatingLabelText="Full Name"
                     ref="fullname"
                   />
                   <br/>
                   <TextField
                     floatingLabelText="Email"
                     ref="email"
                   />
                   <br/>
                   <TextField ref='password'
                     hintText="Password"
                     floatingLabelText="Password"
                     ref="password">
                     <input type="password" />
                   </TextField>
                 </div>
               </Tab>
             </Tabs>
           </Dialog>
        </div>
      );
  }
}
