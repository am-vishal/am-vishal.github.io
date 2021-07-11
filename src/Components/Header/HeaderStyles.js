import { makeStyles } from '@material-ui/core/styles';

const HeaderStyles = makeStyles(() => ({
    root: {
        background: '#203647',
        color: '#ffffff',
        display: 'grid',
        alignContent: 'center',
        justifyItems: 'center',
        textAlign: 'center',
        height: '90vh',
        width: '100%',
        position: 'relative',
    },
    rootGrid: {
        display: 'grid',
        placeItems: 'center',
        margin: '1vw auto',
        '& para': {
            fontSize: '2vw',
        },
        '& button': {
            fontSize: '1.5vw',
            textAlign: 'center',
            color: '#04c2c9',
            border: '2px dotted',
            borderImage: 'conic-gradient( #04c2c9, #fad648, #fad648, #fad648, #04c2c9, #04c2c9, #04c2c9) 1',
            background: 'linear-gradient(to right, #04c2c9 32%, #03a9f4 53%, #fad648 60%, #fad648 78%, #fad648 100%)',
            '-webkit-text-fill-color': 'transparent',
            '-webkit-background-clip': 'text',
        }
    },
    SocialLinks: {
        '& img': {
            cursor: 'pointer',
            margin: '1vw',
            height: '30px',
            width: 'auto',
            transition: '0.3s ease-out',
            '&:hover': {
                '-webkit-box-reflect': 'below -2px -webkit-gradient(linear, right top, right bottom, from(transparent), color-stop(40%, transparent), to(rgba(255, 255, 255, 0.4)))',
                transform: 'scale(1.1)',
            },
        },
    },
}));

export default HeaderStyles;