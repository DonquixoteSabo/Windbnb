import React from 'react';

import SearchBar from './SearchBar';

import logo from '../assets/logo.png';

const Header = ({
  allLocations,
  guestsNumber,
  currentActive,
  handleLocalizationItemClick,
  handleGuestChange,
}) => {
  return (
    <header className='header'>
      <div className='header__logo'>
        <img src={logo} alt='firm' />
      </div>
      <SearchBar
        handleGuestChange={handleGuestChange}
        handleLocalizationItemClick={handleLocalizationItemClick}
        currentActive={currentActive}
        allLocations={allLocations}
        guestsNumber={guestsNumber}
      />
    </header>
  );
};

export default Header;
