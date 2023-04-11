import React from 'react';
import './ColorList.scss';
import ColorItem from '../ColorItem/ColorItem';

const ColorList = () => {
    const colorsFromLocalStorage = JSON.parse(localStorage.getItem('colors') || '[]');

    return (
        <ul className="color-list">
            {colorsFromLocalStorage.map((color: string, index: number) => (
                <ColorItem key={index} color={color} backgroundColor={color} />
            ))}
        </ul>
    );
};

export default ColorList;
