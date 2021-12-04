import { makeStyles, fade } from '@material-ui/core/styles';

const drawerWidth = 0;

export default makeStyles((theme) => ({
  appBar: {
    boxShadow: 'none',
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    backgroundColor: '#035EA8',
    opacity: '80%',
    color: '#FFFFFF',

  },
  title: {
    flexGrow: 1,
    alignItems: 'center',
    margin: 'auto',
    display: 'flex',
    textDecoration: 'none',
    fontWeight: 350,
    fontSize: '26px'
  },
  image: {
    marginRight: 'auto',
    width: '300px',
    height: '32px'
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  grow: {
    flexGrow: 1,
  }

}));