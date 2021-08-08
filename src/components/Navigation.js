import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { authSelectors } from "../redux/auth";
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

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);
  return (
    <nav>
      <NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}>
        <Typography variant="h6">Home</Typography>
      </NavLink>

      {isLoggedIn && (
        <NavLink
          to="/contacts"
          exact
          style={styles.link}
          activeStyle={styles.activeLink}
        >
          <Typography variant="h6">Contacts</Typography>
        </NavLink>
      )}
    </nav>
  );
}
