import React, { useState } from 'react';
import './AddColorForm.scss';

const AddColorForm = () => {
    const [colorValue, setColorValue] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (colorValue) {
            const hexColorRegex = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;
            if (hexColorRegex.test(colorValue)) {
                const colorsFromLocalStorage = JSON.parse(localStorage.getItem('colors') || '[]');
                colorsFromLocalStorage.push(colorValue.toUpperCase());
                localStorage.setItem('colors', JSON.stringify(colorsFromLocalStorage));
                setColorValue('');
            } else {
                alert('Nieprawidłowy kod koloru HEX RGB');
            }
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        if (value.length === 1 && value === '#') {
            setColorValue('');
        } else if (value.length > 1 && value.charAt(0) !== '#') {
            setColorValue(`#${value}`);
        } else if (value.length <= 7) {
            setColorValue(value);
        }
    };

    return (
        <form className="add-color-form" onSubmit={handleSubmit}>
            <label htmlFor="add-color-form__label" className="add-color-form__label">Dodaj Nowy Kolor</label>
            <input
                className="add-color-form__input"
                type="text"
                maxLength={7}
                placeholder="#000000"
                value={colorValue}
                onChange={handleChange}
                required
            />
        </form>
    );
};

export default AddColorForm;
