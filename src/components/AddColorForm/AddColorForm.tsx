import React, { useState } from 'react';
import './AddColorForm.scss';

const AddColorForm = () => {
    const [colorValue, setColorValue] = useState('');
    const [existingColors, setExistingColors] = useState<string[]>([]);

    React.useEffect(() => {
        const colorsFromLocalStorage = JSON.parse(localStorage.getItem('colors') || '[]');
        setExistingColors(colorsFromLocalStorage);
    }, []);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (colorValue) {
            const hexColorRegex = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;
            if (hexColorRegex.test(colorValue)) {
                if (existingColors.includes(colorValue.toUpperCase())) {
                    alert('This color already exists!');
                    return;
                }

                const colorsFromLocalStorage = [...existingColors, colorValue.toUpperCase()];
                localStorage.setItem('colors', JSON.stringify(colorsFromLocalStorage));
                setColorValue('');
                window.location.reload();

            } else {
                alert('Invalid HEX RGB color code');
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
            <label htmlFor="add-color-form__label" className="add-color-form__label">Add new color</label>
            <div className="add-color-form__post">
                <div>
                    <input
                        className="add-color-form__input"
                        type="text"
                        maxLength={7}
                        placeholder="#000000"
                        value={colorValue}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="add-color-form__button">Add</button>
            </div>
        </form>
    );
};

export default AddColorForm;
