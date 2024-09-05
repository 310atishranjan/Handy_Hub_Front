import React from 'react';
import ReactDOM from 'react-dom';

const MODAL_STYLES = {
  position: 'fixed',
  top: '60%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'rgb(34, 34, 34)',
  zIndex: 1000,
  padding: '20px',
  borderRadius: '8px',
  width: '90%',
  maxWidth: '300px',
  height: 'auto',
  maxHeight: '90vh',
  overflowY: 'auto',
  color: 'white',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  boxSizing: 'border-box',
};

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 999,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const CLOSE_BUTTON_STYLES = {
  position: 'absolute',
  top: '10px',
  right: '10px',
  background: 'transparent',
  border: 'none',
  color: 'white',
  fontSize: '1.5rem',
  cursor: 'pointer',
};

export default function LoginPage({ children, onClose }) {
  return ReactDOM.createPortal(
    <>
      <div style={OVERLAY_STYLES} onClick={onClose} />
      <div style={MODAL_STYLES}>
        <button style={CLOSE_BUTTON_STYLES} onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </>,
    document.getElementById('login-root')
  );
}
