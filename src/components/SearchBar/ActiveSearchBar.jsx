import React,{useEffect, useState} from 'react';
import { AddAdults, AddChildren } from './AddGuests';
import LocationItem from './LocationItem';

const ActiveSearchBar = ({
    allLocations,
    guestsNumber,
    handleSearchBarChange,
    currentActive,
    handleLocalizationItemClick,
    handleGuestChange}) => {
    const buttonStyle={
        position: 'fixed',
        top: 0,
        right: 0,
        width: 50,
        height: 50,
        background: 'none',
        border: 'none',
        fontSize: 25,
        zIndex: 3,
    }
    const [adultsNumber, setAdultsNumber] = useState(0);
    const [childrenNumber, setChildrenNumber] = useState(0);

    useEffect(()=>{
        setAdultsNumber(0)
        setChildrenNumber(0);
        handleGuestChange('reset');
    },[])

    const [activeSelect, setActiveSelect] = useState('location')
    ;
    const handleGuestsButton = (role, action) => {
            if(action === 'plus'){
                handleGuestChange('plus');
                if(role === 'adult') {
                    setAdultsNumber(prevState => prevState + 1);
                } else if(role === 'children'){
                    setChildrenNumber(prevState => prevState + 1)
                }
            } else if(action === 'minus'){
                handleGuestChange('minus')
                if(role === 'adult') {
                    setAdultsNumber(prevState => prevState - 1);
                } else if(role === 'children'){
                    setChildrenNumber(prevState => prevState - 1)
                }
            }
    }

    return ( 
    <>
        <button 
        onClick={handleSearchBarChange}
        style={buttonStyle}>X</button>
        <div className='header__search-bar search active'>
            <div className="wrapper">
                <div
                className={"search__location  active"}
                onClick={()=> setActiveSelect('location')}>
                    <p className='label'>location</p>
                    <div>{currentActive.city}, {currentActive.country}</div>
                </div>
                <div 
                className="search__guests  active"
                onClick={()=> setActiveSelect('guests')}>
                    <p className='label'>Guests</p>
                    {guestsNumber === 0 ? (
                    <p className='search__placeholder'>Add Guests</p>
                    ) : guestsNumber}
                </div>  
            </div>
        <ul className='search__list'>
        {activeSelect === 'location' ? (
           <LocationItem
           allLocations={allLocations}
           handleLocalizationItemClick={handleLocalizationItemClick} />
        ) : (
            <>
                <li>
                    <AddAdults
                    handleGuestsButton={handleGuestsButton}
                    adultsNumber={adultsNumber}/> 
                </li>
                <li>
                    <AddChildren
                    handleGuestsButton={handleGuestsButton}
                    childrenNumber={childrenNumber}/>  
                </li>
           </>
        )}
        </ul>
        <button
        onClick={handleSearchBarChange}
        className='search__button active'>
            <i className="fas fa-search"></i> Search
        </button>
    </div>
    <div 
    onClick={handleSearchBarChange}
    className="search-bar-disabler">

    </div>
    </>
     );
}
 
export default ActiveSearchBar;