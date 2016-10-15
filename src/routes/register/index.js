import React from 'react';
import Register from './Register';

const title = 'New User Registration';

export default {

  path: '/register',

  action() {
    return {
      title,
      component: <Register title={title} />,
    };
  },

};
