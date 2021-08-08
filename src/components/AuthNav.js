import React from "react";
import { NavLink } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

const styles = {
  link: {
    display: "inline-block",
    textDecoration: "none",
    padding: 12,
    fontWeight: 700,
    color: "#FBFCFC",
  },
  activeLink: {
    color: "#E84A5F",
  },
};

const AuthNav = () => (
  <div>
    <NavLink
      to="/register"
      exact
      style={styles.link}
      activeStyle={styles.activeLink}
    >
      <Typography variant="h6">Sign up</Typography>
    </NavLink>
    <NavLink
      to="/login"
      exact
      style={styles.link}
      activeStyle={styles.activeLink}
    >
      <Typography variant="h6">Sign in</Typography>
    </NavLink>
  </div>
);

export default AuthNav;
