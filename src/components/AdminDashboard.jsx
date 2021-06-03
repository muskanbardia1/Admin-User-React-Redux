import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Tooltip from "@material-ui/core/Tooltip";
import clsx from "clsx";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Button from "@material-ui/core/Button";
import { useSelector } from "react-redux";
import { store } from "../store/store";
import { loggedUser, isLogged, deleteUser } from "../redux/actions";
import { useHistory } from "react-router-dom";

import SearchBar from "material-ui-search-bar";
import ViewAdmin from "./ViewAdmin";

const drawerWidth = 240;

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  root: {
    display: "flex",
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
}));

export default function Orders() {
  const classes = useStyles();
  const [searched, setSearched] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const { users } = useSelector((state) => state);
  const [data, setdata] = React.useState(users);
  const [switcher, setswitcher] = React.useState(false);
  const [selectedUser, setselectedUser] = React.useState();

  let history = useHistory();

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const deletePerson = (id) => {
    users.map((user,index) => 
      user.id == id ? store.dispatch(deleteUser(id)): ""
    )
    
  };

  React.useEffect(() => {
    setdata(users)
  }, [users])

  const requestSearch = (searchedVal) => {
    if(searchedVal!=""){
    const filteredRows = data.filter((row) => {
      return row.firstName.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setdata(filteredRows);}
    else{
      setdata(users);
    }
  };

  const cancelSearch = () => {
    setSearched("");
    requestSearch("searched");
    setdata(users)
  };

  const signOut = () => {
    store.dispatch(isLogged(false));
    history.push("/login")
    
  };

  const ViewUser = (person) => {
    setselectedUser(person);
    console.log(switcher);
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
          <Tooltip title="Sign out" aria-label="add">
            <Link to="/login">
              <IconButton color="inherit" onClick={(e) => signOut(e)}>
                <Badge color="secondary">
                  <ExitToAppIcon  style={{color: "white"}}/>
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
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}></Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper></Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              {!switcher && (
                <Paper className={classes.paper}>
                  <SearchBar
                    value={searched}
                    onChange={(searchVal) => requestSearch(searchVal)}
                    onCancelSearch={() => cancelSearch()}
                  />
                  <React.Fragment>
                    {/* { firstName: fName, 
          lastName: lName,
          email: email, 
          pass: pass,
          address: address,
          profilePic: selectedFile,
          phone: phone } */}

                    <Table size="small">
                      <TableHead>
                        <TableRow>
                          <TableCell>Profile</TableCell>
                          <TableCell>Name</TableCell>
                          <TableCell>Email</TableCell>
                          <TableCell>Address</TableCell>
                          <TableCell>Phone</TableCell>
                          <TableCell align="right">Action</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {data.map((user, id) => (
                          <TableRow key={id}>
                            <TableCell>
                              <img
                                width="40%"
                                className={classes.media}
                                src={user.profilePic}
                              />
                            </TableCell>
                            <TableCell>
                              {user.firstName} {user.lastName}
                            </TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.address}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell align="right">
                              <Button
                                variant="contained"
                                onClick={() => ViewUser(user)}
                                color="primary"
                              >
                                View
                              </Button>
                              <Button
                                variant="contained"
                                onClick={()=> deletePerson(user.id)}
                                color="secondary"
                              >
                                Delete
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                    <div className={classes.seeMore}></div>
                  </React.Fragment>
                </Paper>
              )}
              {switcher && (
                <ViewAdmin
                  switcher={switcher}
                  setswitcher={setswitcher}
                  selectedUser={selectedUser}
                />
              )}
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}
