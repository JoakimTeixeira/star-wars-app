import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ title }) => {
  Header.propTypes = {
    title: PropTypes.string.isRequired,
  };
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
