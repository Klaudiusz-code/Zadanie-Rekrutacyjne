import React from 'react';
import { VscChromeClose } from 'react-icons/vsc';
import {MdDone} from 'react-icons/md'
import './modal.scss'

interface Modal {
    text: string;
    onConfirm: () => void;
    onCancel: () => void;
}

const ModalChoice: React.FC<Modal> = ({ text, onConfirm, onCancel }) => {
    return (
        <div className="modal">
            <div className="modal__content">
                <div className="modal__header">
                    <h3 className="modal__title">{text}</h3>
                </div>

                <div className="modal__footer">
                    <button className="btn btn__success" onClick={onConfirm}>
                      <span className="modal__icon"><MdDone size={17} /></span>
                        Yes
                    </button>
                    <button className="btn btn__danger" onClick={onCancel}>
                        <span className="modal__icon"><VscChromeClose size={17} /></span>
                        No
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ModalChoice;
