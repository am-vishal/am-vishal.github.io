import React from 'react';
import {Grid, Typography} from '@material-ui/core';
import PortfolioCard from './PortfolioCard/PortfolioCard';

const Portfolio = () => {
  return (
    <div style={{display: 'grid', backgroundColor: '#DCDCDC'}}>
      <Typography
        style={{
          textAlign: 'center',
          fontSize: '2vw',
          lineHeight: '2em',
          textDecoration: 'underline',
        }}
      >
        Projects
      </Typography>
      <Grid container>
        <PortfolioCard />
      </Grid>
      <a
        href="https://github.com/am-vishal?tab=repositories"
        target="_blank"
        rel="noreferrer"
        style={{
          cursor: 'pointer',
          padding: '0.5em 3em',
          border: 'none',
          textAlign: 'center',
          color: '#ffffff',
          background: '#45526c',
          fontSize: '1em',
          margin: '2vw auto',
          textDecoration: 'none',
        }}
      >
        See More
      </a>
    </div>
  );
};

export default Portfolio;
