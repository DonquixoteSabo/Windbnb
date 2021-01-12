import React from 'react';

export const AddAdults= (
    {
        handleGuestsButton,
        adultsNumber
    }) => {
    return (
        <div className="search__guests  active">
            <p className='label'>Adults</p>
            <p className='search__placeholder'>Ages 13 or aboce</p>
            <button
            disabled={adultsNumber === 0 ? true : false}
            className='guests-button'
            onClick={()=> handleGuestsButton('adult', 'minus')}>-</button>
                            {adultsNumber}
            <button className='guests-button' onClick={()=> handleGuestsButton('adult', 'plus')}>+</button>
        </div>  
    );
}
 
export const AddChildren = (
    {
        childrenNumber, 
        handleGuestsButton
    }) => {
    return (
        <div className="search__guests  active">
            <p className='label'>Children</p>
            <p className='search__placeholder'>Ages 2-12</p>
            <button
            disabled={childrenNumber === 0 ? true : false}
            className='guests-button'
            onClick={()=> handleGuestsButton('children', 'minus')}>-</button>
                        {childrenNumber}
            <button
            className='guests-button'
            onClick={()=> handleGuestsButton('children', 'plus')}>+</button>
        </div>  
    );
}
 
