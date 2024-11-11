import React from 'react';
import { useDispatch } from 'react-redux';
import { clearData } from '../redux/actions';
import './Footer.css';

const Footer = () => {
  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(clearData());
  };

  return (
    <footer className="footer-container">
      <button onClick={handleClear}>Clear</button>
    </footer>
  );
};

export default Footer;

