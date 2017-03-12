import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {
  render() {
    return (
      <div className='Layout'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        {this.props.children}
      </div>
    );
  }
}

Layout.propTypes = {
  children: React.PropTypes.node,
};

Layout.defaultProps = {
  children: null,
};
