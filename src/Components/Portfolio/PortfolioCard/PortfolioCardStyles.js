import { makeStyles } from '@material-ui/core/styles';

const PortfolioCardStyles = makeStyles(() => ({
    root: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        justifyItems: 'center',
        justifySelf: 'center',
        alignSelf: 'center',
        width: '24em',
        margin: '1em auto',
        cursor: 'pointer',
        paddingBottom: '3.7em',
        borderRadius: '1em 1em 0 0',
        background: 'transparent',
        transition: '0.3s ease-in-out',
        boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
        '&:hover': {
            boxShadow: '20px 20px 20px -8.13px #203647',
            transform: 'translate(-3px,-3px)',
        },
    },
    CardImg: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        justifyItems: 'center',
        background: 'linear-gradient(0deg, #5D6874, #E3E3E3 100%)',
        opacity: '1',
        '& img': {
            opacity: '0.8',
            height: '23.5em',
            objectFit: 'cover',
            display: 'block',
            margin: '0 auto',
        },
    },
    ProjectDesc: {
        display: 'block',
        position: 'absolute',
        zIndex: '100',
    },

    buttonGrid: {
        position: 'absolute',
        bottom: 0,
        padding: '0',
        margin: '0 auto',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        justifyItems: 'center',
        background: '#45526c',
        '& a': {
            textDecoration: 'none',
        },
        '& button': {
            cursor: 'pointer',
            margin: '0 !important',
            padding: '0.42em 3.6em',
            border: 'none',
            textAlign: 'center',
            color: '#ffffff',
            background: '#45526c',
        },
    },
}));

export default PortfolioCardStyles;
