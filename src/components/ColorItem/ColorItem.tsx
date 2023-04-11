import React from 'react';
import './ColorItem.scss';

interface Props {
    color: string;
    backgroundColor: string;
}

const ColorItem = ({ color }: Props) => {

    const handleRemoveClick = () => {
        if (window.confirm(`Czy na pewno chcesz usunąć kolor ${color}?`)) {
            const colorsFromLocalStorage = JSON.parse(localStorage.getItem('colors') || '[]');
            const newColors = colorsFromLocalStorage.filter((c: string) => c !== color);
            localStorage.setItem('colors', JSON.stringify(newColors));
            window.location.reload();
        }
    }

    return (
        <div className="color-item">
            <div className="color-item__swatch" style={{ backgroundColor: color }}></div>
            <div className="color-item__name" style={{ backgroundColor: color }}>{color}</div>
            <button className="color-item__remove-button" onClick={handleRemoveClick}>Usuń</button>
        </div>
    );
};

export default ColorItem;
