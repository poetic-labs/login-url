import React from 'react';
import { Route } from 'react-router-dom';
import queryString from 'query-string';
import PropTypes from 'prop-types';
import _ from 'lodash';

const LoginURL = React.createClass({
  propTypes: {
    token: React.PropTypes.string.isRequired,
  },

  render() {
    const style = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    };

    const authCheck = (router) => {
      const { token } = this.props;
      const search = _.get(router.location, 'search', '');
      const urlToken = _.get(queryString.parse(search), 'token', '');

      if (urlToken) localStorage.setItem('urlToken', urlToken);

      if (localStorage.getItem('urlToken') === token) {
        return this.props.children;
      }
      return <div style={style}>You do not have access.</div>;
    };

    return <Route path='/' component={authCheck} />;
  }
});

module.exports = LoginURL;
