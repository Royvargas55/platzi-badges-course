import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './global.css';
import BadgeNew from './pages/BadgeNew';

const container = document.getElementById('app');

ReactDOM.render(<BadgeNew />, container);

{/* <Badge 
  firstName="Roy" 
  lastName="Vargas"
  avatarUrl="https://s.gravatar.com/avatar/28ef14ef207a0118ae862f0e289fda16?s=80"
  jobTitle="Kickass senior devs"
  twitter="Royvargas55"/> */}
