import React from 'react';
import { string } from 'prop-types';

const Header = ({ title }) => {
  Header.propTypes = {
    title: string.isRequired,
  };
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
