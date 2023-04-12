import React, { useState } from 'react';
import './ColorItem.scss';
import { VscChromeClose } from 'react-icons/vsc';
import Modal from '../modal/Modal';

interface Props {
    color: string;
    backgroundColor: string;
}

const ColorItem = ({ color }: Props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleRemoveClick = () => {
        setIsModalOpen(true);
    };

    const handleConfirmRemove = () => {
        const colorsFromLocalStorage = JSON.parse(localStorage.getItem('colors') || '[]');
        const newColors = colorsFromLocalStorage.filter((c: string) => c !== color);
        localStorage.setItem('colors', JSON.stringify(newColors));
        window.location.reload();
    };

    const handleCancelRemove = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="color-item">
            <div className="color-item__swatch" style={{ backgroundColor: color }}>
                <div className="color-item__name" style={{ backgroundColor: color }}>
                    {color}
                </div>
                <button className="color-item__remove-button" onClick={handleRemoveClick}>
                    <VscChromeClose size={18} />
                </button>
            </div>
            {isModalOpen && (
                <Modal
                    text={`Are you sure you want to remove color ${color} ?`}
                    onConfirm={handleConfirmRemove}
                    onCancel={handleCancelRemove}
                />
            )}
        </div>
    );
};

export default ColorItem;
