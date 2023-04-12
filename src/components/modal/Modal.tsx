import React, { useEffect, useRef } from 'react';
import { VscChromeClose } from 'react-icons/vsc';
import { MdDone } from 'react-icons/md';
import './Modal.scss';

interface ModalProps {
    text: string;
    onConfirm: () => void;
    onCancel: () => void;
}

const ModalChoice: React.FC<ModalProps> = ({ text, onConfirm, onCancel }) => {
    const modalRef = useRef<HTMLDivElement>(null);

    const handleOutsideClick = (event: MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
            onCancel();
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    return (
        <div className="modal-container">
            <div className="modal">
                <div className="modal__content" ref={modalRef}>
                    <div className="modal__header">
                        <h3 className="modal__title">{text}</h3>
                    </div>

                    <div className="modal__footer">
                        <button className="btn btn__success" onClick={onConfirm}>
              <span className="modal__icon">
                <MdDone size={17} />
              </span>
                            Yes
                        </button>
                        <button className="btn btn__danger" onClick={onCancel}>
              <span className="modal__icon">
                <VscChromeClose size={17} />
              </span>
                            No
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalChoice;
