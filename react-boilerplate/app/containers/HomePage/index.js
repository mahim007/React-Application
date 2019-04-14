/* eslint-disable prettier/prettier */
/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { NavLink } from 'react-router-dom';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  linkDesign = {
    padding: '10px',
    margin: '15px',
    border: '1px solid blue',
    textAlign: 'center',
    backgroundColor: 'green',
    color: 'red',
  };

  render() {
    const navbar = (
      <div className="row">
        <NavLink to="/" className="col-md-6 cursor-pointer">
          Homepage
        </NavLink>
        <NavLink to="/blog" className="col-md-6 text-align-center">
          BlogPage
        </NavLink>
      </div>
    );
    return <div className="container">{navbar}</div>;
  }
}
