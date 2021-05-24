import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { useSelector } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { Badge } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
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
}));

export default function UserDashboard() {
  const signUpList = useSelector((state) => state.signUpList);
  const infoList = useSelector((state) => state.infoList);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Link to="/welcome">
        <IconButton color="inherit">
          <Badge>
            <KeyboardBackspaceIcon className={classes.large} />
          </Badge>
        </IconButton>
      </Link>

      <Container component="main" className={classes.main} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          {/* {signUpList && signUpList.firstName + " " + signUpList.lastName} */}
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {/* Email: {signUpList.email} */}
        </Typography>
        <Typography variant="h3" component="h2" gutterBottom>
          Song List: <br />
          {/* {infoList &&
            infoList.map((list) => (
              <>
                <IconButton color="inherit">
                  <Avatar src="../img_40723.png" className={classes.large} />
                </IconButton>

                <Typography
                  style={{ textDecoration: "none" }}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  {list.name}
                </Typography>
              </>
            ))} */}
        </Typography>
      </Container>
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