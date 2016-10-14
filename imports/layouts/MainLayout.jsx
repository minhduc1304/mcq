import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import LoginDialog from '../ui/Components/LoginDialog.jsx'
import { Meteor } from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import Header from '../ui/Components/Header.jsx';

var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

export const MainLayout = ({content}) => (
  <MuiThemeProvider>
    <div className="main-layout">
      <Header/>
      {content}
      <h1>Footer</h1>
    </div>
  </MuiThemeProvider>
)
