import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
    root: {
        maxWidth: '100%',
        backgroundColor: '#035EA8',
        opacity: '80%'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', //16:9
        scale: '0.25'
    },
    title: {
        fontSize: '28px',
        color: 'white'
    },
    description: {
        fontSize: '14px',
        color: 'white'
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
        color: 'FFFFFF',
    }
}));
