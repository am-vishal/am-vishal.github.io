import React from 'react';
import {Grid} from '@material-ui/core';
import javascript from 'Images/javascript.svg';
import react from 'Images/react.svg';
import redux from 'Images/redux.svg';
import materialui from 'Images/materialui.svg';
import styledcomponents from 'Images/styledcomponents.webp';
import bootstrap from 'Images/bootstrap.svg';
import css from 'Images/css3.svg';
import html5 from 'Images/html5.svg';
import datastructure from 'Images/datastructure.webp';
import firebase from 'Images/firebase.svg';
import git from 'Images/git.svg';
import github from 'Images/github.svg';
import {makeStyles} from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

const SkillsStyles = makeStyles(() => ({
  ImgContainer: {
    background: '#132c33',
    display: 'flex',
    justifyContent: 'space-evenly',
    width: '100%',
    '& img': {
      margin: '1em auto !important',
      animation: `$skew 3s infinite`,
      transition: '1s ease-in-out',
      transform: 'skew(15deg)',
      animationDirection: 'alternate',
    },
  },
  '@keyframes skew': {
    '0%': {
      transform: 'skewX(15deg)',
    },
    '100%': {
      transform: 'skewX(-15deg)',
    },
  },
}));

const Skills = () => {
  const classes = SkillsStyles();
  return (
    <Grid container className={classes.ImgContainer}>
      <Tooltip title="JavaScript" arrow>
        <img src={javascript} alt="javascript-icon" height="50px" width="50px" />
      </Tooltip>
      <Tooltip title="ReactJS" arrow>
        <img src={react} alt="react-icon" height="50px" width="50px" />
      </Tooltip>
      <Tooltip title="Redux" arrow>
        <img src={redux} alt="redux-icon" height="50px" width="50px" />
      </Tooltip>
      <Tooltip title="HTML5" arrow>
        <img src={html5} alt="html5-icon" height="50px" width="50px" />
      </Tooltip>
      <Tooltip title="CSS" arrow>
        <img src={css} alt="css-icon" height="50px" width="50px" />
      </Tooltip>
      <Tooltip title="Bootstrap" arrow>
        <img src={bootstrap} alt="bootstrap-icon" height="50px" width="50px" />
      </Tooltip>
      <Tooltip title="Material UI" arrow>
        <img src={materialui} alt="materialui-icon" height="50px" width="50px" />
      </Tooltip>
      <Tooltip title="Styled Components" arrow>
        <img src={styledcomponents} alt="styledcomponents-icon" height="50px" width="50px" />
      </Tooltip>
      <Tooltip title="Data Structure" arrow>
        <img src={datastructure} alt="datastructure-icon" height="50px" width="50px" />
      </Tooltip>
      <Tooltip title="Git" arrow>
        <img src={git} alt="git-icon" height="50px" width="50px" />
      </Tooltip>
      <Tooltip title="Github" arrow>
        <img src={github} alt="github-icon" height="50px" width="50px" />
      </Tooltip>
      <Tooltip title="Firebase" arrow>
        <img src={firebase} alt="firebase-icon" height="50px" width="50px" />
      </Tooltip>
    </Grid>
  );
};

export default Skills;
