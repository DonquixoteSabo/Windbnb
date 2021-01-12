import React from 'react';


const LocationItem = (
    {
    allLocations,
    handleLocalizationItemClick
}) => {
    return (
        allLocations.map((location,index) => (
            <li
            key={index}
            className="search__item"
            onClick={()=> handleLocalizationItemClick(location.city, location.country)}>

                <i className="fas fa-map-marker-alt"></i>
                {location.city}, {location.country}

            </li>
        ))
      );
}
 
export default LocationItem;