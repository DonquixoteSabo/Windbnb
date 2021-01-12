import React, {useState} from 'react';

import ActiveSearchBar from './SearchBar/ActiveSearchBar';
import UnactiveSearchBar from './SearchBar/UnactiveSearchBar';

const SearchBar = ({allLocations, guestsNumber, currentActive, handleLocalizationItemClick, handleGuestChange}) => {
    const [isSearchBarActive, setIsSearchBarActive] = useState(false);
    const [activeSelect, setActiveSelect] = useState('location');

    const handleSearchBarChange = ()=> setIsSearchBarActive(!isSearchBarActive);

        return ( 
            isSearchBarActive ? (
                <ActiveSearchBar 
                allLocations={allLocations}
                guestsNumber={guestsNumber}
                handleSearchBarChange={handleSearchBarChange}
                currentActive={currentActive}
                handleLocalizationItemClick={handleLocalizationItemClick}
                handleGuestChange={handleGuestChange} />
            ) : <UnactiveSearchBar 
                allLocations={allLocations}
                guestsNumber={guestsNumber}
                handleSearchBarChange={handleSearchBarChange}
                currentActive={currentActive}/>
         );
}
 
export default SearchBar;