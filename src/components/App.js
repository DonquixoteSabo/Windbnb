import React, { useState, useEffect } from 'react';

import Header from './Header';
import RoomList from './RoomList';
import { getUniqueListBy } from '../utilities/getUniqueListBy';

import stays from '../API/stays.json';
import Footer from './SearchBar/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [guestsNumber, setGuestsNumber] = useState(0);

  const allLocations = getUniqueListBy(stays, 'city');
  const [currentActive, setCurrentActive] = useState({
    city: allLocations[0].city,
    country: allLocations[0].country,
  });

  const filteredRooms = stays.filter(room => {
    return (
      room.city.toLowerCase().includes(currentActive.city.toLowerCase()) &&
      room.country
        .toLowerCase()
        .includes(currentActive.country.toLowerCase()) &&
      guestsNumber <= room.maxGuests
    );
  });

  const handleGuestChange = action => {
    if (guestsNumber >= 0) {
      if (action === 'plus') {
        setGuestsNumber(prevState => prevState + 1);
      } else if (action === 'minus') {
        setGuestsNumber(prevState => prevState - 1);
      } else if (action === 'reset') {
        setGuestsNumber(0);
      }
    }
  };

  const handleLocalizationItemClick = (city, country) => {
    setCurrentActive({
      city,
      country,
    });
  };

  useEffect(() => {
    setIsLoading(false);
  }, []);
  return isLoading ? (
    <h1 style={{ fontSize: 50 }}>Content is loading...</h1>
  ) : (
    <>
      <Header
        allLocations={allLocations}
        guestsNumber={guestsNumber}
        handleLocalizationItemClick={handleLocalizationItemClick}
        currentActive={currentActive}
        handleGuestChange={handleGuestChange}
      />
      <RoomList country={currentActive.country} filteredRooms={filteredRooms} />
      <Footer />
    </>
  );
}

export default App;
