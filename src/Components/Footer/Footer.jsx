import {Typography} from '@material-ui/core';
import React from 'react';

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: '#1E242C',
        textAlign: 'center',
        margin: '0 auto',
      }}
    >
      <Typography style={{color: '#E31B6D', lineHeight: '2.5em'}}>
        <span style={{color: '#808080'}}>VISHAL</span> ©2021
      </Typography>
    </div>
  );
};

export default Footer;
