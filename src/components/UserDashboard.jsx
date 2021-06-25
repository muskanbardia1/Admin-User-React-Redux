import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import Tooltip from "@material-ui/core/Tooltip";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import clsx from "clsx";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Button from "@material-ui/core/Button";
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import PersonIcon from '@material-ui/icons/Person';

import EditUser from "./EditUser";

import { useSelector } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { Link } from "react-router-dom";
import { store } from "../store/store";
import { isLogged } from "../redux/actions";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  main: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },
  large: {
    width: theme.spacing(9),
    height: theme.spacing(9),
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
}));

export default function UserDashboard() {
  const signUpList = useSelector((state) => state.signUpList);
  const loggedProfile = useSelector((state) => state.loggedProfile);
  const [switcher, setswitcher] = React.useState(false);
  const { users } = useSelector((state) => state);
  const [selectedUser, setselectedUser] = React.useState();
  const classes = useStyles();
  const [userprofile,setuserprofile] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const signOut = () => {
    store.dispatch(isLogged(false));
  };

  const profile = () => {
    setuserprofile(!userprofile);
  };

  const editProfile = (loggedProfile) => {
    setselectedUser(loggedProfile);
    setswitcher(true);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Dashboard
          </Typography>
          <Tooltip title="Profile" aria-label="add">
              <IconButton color="inherit" onClick={(e) => profile(e)}>
                <Badge color="secondary">
                  {!userprofile ? 
                  <PermIdentityIcon style={{ color: "white" }} />
                  :
                  <PersonIcon style={{ color: "white" }} />
                  }
                </Badge>
              </IconButton>
          </Tooltip>
          <Tooltip title="Sign out" aria-label="add">
            <Link to="/login">
              <IconButton color="inherit" onClick={(e) => signOut(e)}>
                <Badge color="secondary">
                  <ExitToAppIcon style={{ color: "white" }} />
                </Badge>
              </IconButton>
            </Link>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{}</List>
        <Divider />
        <List>{}</List>
      </Drawer>
      {userprofile && <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              {!switcher && (
                <Container
                  component="main"
                  className={classes.main}
                  maxWidth="sm"
                >
                  <img
                    width="20%"
                    className={classes.media}
                    src={loggedProfile.profilePic}
                  />
                  <Typography variant="h2" component="h1" gutterBottom>
                    {loggedProfile &&
                      loggedProfile.firstName + " " + loggedProfile.lastName}
                  </Typography>
                  <Typography variant="h5" component="h2" gutterBottom>
                    Email: {loggedProfile.email}
                  </Typography>
                  <Typography variant="h5" component="h2" gutterBottom>
                    Phone: {loggedProfile.phone}
                  </Typography>
                  <Typography variant="h5" component="h2" gutterBottom>
                    Address: {loggedProfile.address}
                  </Typography>
                  <Button
                    variant="contained"
                    onClick={() => editProfile(loggedProfile)}
                    color="primary"
                  >
                    Edit
                  </Button>
                </Container>
              )}

              {switcher && (
                <EditUser
                  switcher={switcher}
                  setswitcher={setswitcher}
                  selectedUser={selectedUser}
                />
              )}
            </Grid>
          </Grid>
        </Container>
      </main>}

      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">
            My sticky footer can be found here.
          </Typography>
        </Container>
      </footer>
    </div>
  );
}
