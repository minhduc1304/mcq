import React from 'react';
import {mount} from 'react-mounter';
import {MainLayout} from '../layouts/MainLayout.jsx';
import Home from '../ui/Home.jsx';

FlowRouter.route('/', {
  action(){
    mount(
        MainLayout, {content: (<Home/>)
        }
    )
  }
});
