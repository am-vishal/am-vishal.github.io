import {useState} from 'react';
import {Grid, Button, Typography} from '@material-ui/core';
import HeaderStyles from './HeaderStyles';
import GithubIcon from 'Images/github.svg';
import LinkedInIcon from 'Images/linkedin.svg';
import CodepenIcon from 'Images/codepenLogo.svg';
import ResumeLogo from 'Images/resume.webp';
import {Dialog, DialogContent} from '@material-ui/core/';

const Header = () => {
  const classes = HeaderStyles();
  const [open, setOpens] = useState(false);
  const handleClickOpen = () => () => {
    setOpens(true);
  };
  const handleClose = () => {
    setOpens(false);
  };

  return (
    <>
      <Grid container className={classes.root}>
        <Grid item xs={12} className={classes.rootGrid}>
          <Typography component="para">
            I am Vishal
            <span style={{margin: 'auto 6px', fontSize: '2.3vw'}}>|</span>
            <span>Front End Developer</span>
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.rootGrid}>
          <Button onClick={handleClickOpen('paper')}> Contact Me</Button>
        </Grid>
        <Dialog open={open} onClose={handleClose}>
          <Typography style={{color: '#04c2c9', margin: '10px 110px -9px', fontSize: '1.2vw'}}>Contact Me</Typography>
          <svg
            preserveAspectRatio="none"
            viewBox="0 10 100 200"
            height="45"
            width="100%"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            class="svgcolor-light"
          >
            <path d="M5 0 L50 120 L100 -10" fill="transparent" stroke="#04c2c9"></path>
          </svg>
          <DialogContent>
            <Grid item xs={12} style={{display: 'grid', placeItems: 'center'}}>
              <div className={classes.SocialLinks}>
                <a href="https://github.com/am-vishal" rel="noreferrer" target="_blank">
                  <img src={GithubIcon} alt="Github-Icon" />
                </a>
                <a href="https://www.linkedin.com/in/amvishal/" rel="noreferrer" target="_blank">
                  <img src={LinkedInIcon} alt="LinkedIn-Icon" />
                </a>
                <a href="https://codepen.io/am_vishal" rel="noreferrer" target="_blank">
                  <img src={CodepenIcon} alt="Codepen-Icon" />
                </a>
              </div>
            </Grid>
            <Grid item xs={12} style={{display: 'grid', placeItems: 'center', marginBottom: '1vw'}}>
              Or
            </Grid>
            <Grid item xs={12} style={{display: 'grid', placeItems: 'center', marginBottom: '0.5vw'}}>
              <a href="https://drive.google.com/file/d/1mcYPvzfIkYGRvWiSVpciZ8yFtpUBCzNV/view?usp=sharing" rel="noreferrer" target="_blank">
                <img src={ResumeLogo} alt="resume-logo" height="50px" width="50px" style={{borderRadius: '15%'}} />
              </a>
            </Grid>
          </DialogContent>
        </Dialog>
        <Grid container style={{position: 'absolute', marginTop: '60vh'}}>
          <div class="scroll-downs">
            <div class="mousey">
              <div class="scroller"></div>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
