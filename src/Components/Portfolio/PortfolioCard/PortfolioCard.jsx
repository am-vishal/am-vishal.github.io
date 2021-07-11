import React from 'react';
import {Card, CardMedia, Button, Grid} from '@material-ui/core';
import DomImg from 'Images/dom.png';
import PortfolioImg from 'Images/portfolio.png';
import LyricsSearch from 'Images/lyricsSearch.png';
import PortfolioCardStyles from './PortfolioCardStyles';

const PortfolioCard = () => {
  const classes = PortfolioCardStyles();

  return (
    <>
      <Card className={classes.root}>
        <CardMedia className={classes.CardImg}>
          <img src={PortfolioImg} alt="friends-avatar" />
        </CardMedia>
        <Grid className={classes.buttonGrid}>
          <a href="https://amvishal.tech" rel="noreferrer" target="_blank">
            <Button>View Project</Button>
          </a>
          <a href="https://github.com/am-vishal/am-vishal.github.io" rel="noreferrer" target="_blank">
            <Button>View Code</Button>
          </a>
        </Grid>
      </Card>
      <Card className={classes.root}>
        <CardMedia className={classes.CardImg}>
          <img src={DomImg} alt="friends-avatar" />
        </CardMedia>
        <Grid className={classes.buttonGrid}>
          <a href="https://github.com/am-vishal/dom-manipulation" rel="noreferrer" target="_blank">
            <Button>View Project</Button>
          </a>
          <a href="https://amvishal.tech/dom-manipulation/" rel="noreferrer" target="_blank">
            <Button>View Code</Button>
          </a>
        </Grid>
      </Card>
      <Card className={classes.root}>
        <CardMedia className={classes.CardImg}>
          <img src={LyricsSearch} alt="friends-avatar" />
        </CardMedia>
        <Grid className={classes.buttonGrid}>
          <Button disabled style={{cursor: 'no-drop !important', color: '#fff'}}>
            In Progress
          </Button>
          <a href="https://github.com/am-vishal/lyrics-search-app" rel="noreferrer" target="_blank">
            <Button>View Code</Button>
          </a>
        </Grid>
      </Card>
    </>
  );
};

export default PortfolioCard;
