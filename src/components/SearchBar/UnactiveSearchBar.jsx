import React from 'react';


const UnactiveSearchBar = ({
    guestsNumber,
    handleSearchBarChange, 
    currentActive}) => {
    return (
    <div 
    className='header__search-bar search'
    onClick={handleSearchBarChange}>
        <div className={"search__location"}>
            {currentActive.city}, {currentActive.country}
        </div>
        <div className="search__guests">
            {guestsNumber === 0 ? (
            <p className='search__placeholder'>Add Guests</p>
            ) : guestsNumber}
        </div> 
        <button className='search__button'>
            <i className="fas fa-search"></i> 
        </button>
    </div>);
}
 
export default UnactiveSearchBar;