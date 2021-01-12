import React from 'react';
import RoomItem from './RoomItem';

const RoomList = ({ country, filteredRooms }) => {
  return (
    <>
      <header className='title'>
        <h1>
          Stays in {country} + {filteredRooms.length} stays
        </h1>
      </header>
      <main>
        <ul className='rooms'>
          {filteredRooms.map(room => (
            <RoomItem key={room.title} room={room} />
          ))}
        </ul>
      </main>
    </>
  );
};

export default RoomList;
