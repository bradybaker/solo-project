import React from 'react';
// import AppBar from '@material-ui/core/AppBar';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Divider from '@material-ui/core/Divider';
// import Drawer from '@material-ui/core/Drawer';
// import Hidden from '@material-ui/core/Hidden';
// import IconButton from '@material-ui/core/IconButton';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import MenuIcon from '@material-ui/icons/Menu';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles, useTheme } from '@material-ui/core/styles';
// import { useHistory } from 'react-router-dom'
import './SideNav.css'

// const drawerWidth = 240;

// const useStyles = makeStyles((theme) => ({
//     root: {
//         display: 'flex',

//     },
//     drawer: {
//         [theme.breakpoints.up('sm')]: {
//             width: drawerWidth,
//             flexShrink: 0,
//         },
//     },
//     appBar: {
//         [theme.breakpoints.up('sm')]: {
//             width: `calc(100% - ${drawerWidth}px)`,
//             height: 100,
//             justifyContent: 'center',
//             marginLeft: drawerWidth,
//         },
//     },
//     menuButton: {
//         marginRight: theme.spacing(2),
//         [theme.breakpoints.up('sm')]: {
//             display: 'none',
//         },
//     },
//     // necessary for content to be below app bar
//     toolbar: theme.mixins.toolbar,
//     drawerPaper: {
//         width: drawerWidth,
//     },
//     content: {
//         flexGrow: 1,
//         padding: theme.spacing(3),
//     },
// }));

// function SideNav(props) {
//     const { window } = props;
//     const history = useHistory();
//     const classes = useStyles();
//     const theme = useTheme();
//     const [mobileOpen, setMobileOpen] = React.useState(false);

//     const handleDrawerToggle = () => {
//         setMobileOpen(!mobileOpen);
//     };

//     const goToFollowedUsers = () => {
//         console.log('CLIKCING')
//         history.push('/followPage')
//     }

//     const drawer = (
//         <div>
//             <div className={classes.toolbar} />
//             <Divider />
//             <List>
//                 <ListItem button>
//                     <ListItemIcon><InboxIcon /></ListItemIcon>
//                     <ListItemText>Your Closet</ListItemText>
//                 </ListItem>
//                 <ListItem button onClick={() => goToFollowedUsers()} >
//                     <ListItemIcon><InboxIcon /></ListItemIcon>
//                     <ListItemText>Followed Closets</ListItemText>
//                 </ListItem>
//             </List>
//             <Divider />
//             <List>
//                 <ListItem button>
//                     <ListItemIcon><InboxIcon /></ListItemIcon>
//                     <ListItemText>Logout</ListItemText>
//                 </ListItem>
//             </List>
//         </div>
//     );

//     const container = window !== undefined ? () => window().document.body : undefined;

//     return (
//         <div className={classes.root}>
//             <CssBaseline />
//             <AppBar position="fixed" className={classes.appBar}>
//                 <Toolbar>
//                     <IconButton
//                         color="inherit"
//                         aria-label="open drawer"
//                         edge="start"
//                         onClick={handleDrawerToggle}
//                         className={classes.menuButton}
//                     >
//                         <MenuIcon />
//                     </IconButton>
//                     <Typography variant="h3" noWrap>
//                         MySize
//             </Typography>
//                 </Toolbar>
//             </AppBar>
//             <nav className={classes.drawer} aria-label="mailbox folders">
//                 {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
//                 <Hidden smUp implementation="css">
//                     <Drawer
//                         container={container}
//                         variant="temporary"
//                         anchor={theme.direction === 'rtl' ? 'right' : 'left'}
//                         open={mobileOpen}
//                         onClose={handleDrawerToggle}
//                         classes={{
//                             paper: classes.drawerPaper,
//                         }}
//                         ModalProps={{
//                             keepMounted: true, // Better open performance on mobile.
//                         }}
//                     >
//                         {drawer}
//                     </Drawer>
//                 </Hidden>
//                 <Hidden xsDown implementation="css">
//                     <Drawer
//                         classes={{
//                             paper: classes.drawerPaper,
//                         }}
//                         variant="permanent"
//                         open
//                     >
//                         {drawer}
//                     </Drawer>
//                 </Hidden>
//             </nav>
//         </div>
//     );
// }

// export default SideNav;

function SideNav() {
    return (
        <div className='SideNav'>
            <a href='#'>Link</a>
            <a href='#'>Link</a>
            <a href='#'>Link</a>
            <a href='#'>Link</a>
            <a href='#'>Link</a>
        </div>
    )
}

export default SideNav;