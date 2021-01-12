import React from 'react';

const RoomItem = ({room}) => {
    return (
        <li className='room'>
            <img src={room.photo} alt='' className='room__img' />
            <div className="room__wrapper">
                {room.superHost && <span className='room__super-host'>Super Host</span>}
                <p className="room__type">
                        {room.type}. {room.beds}
                </p>
                <span className="room__rating">
                    <i className="fas fa-star"></i>
                    {room.rating}
                </span>
            </div>
            <p className="room__title">
                {room.title}
            </p>
        </li>
    );
}
 
export default RoomItem;