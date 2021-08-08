import React from "react";
import { useSelector } from "react-redux";
import Navigation from "./Navigation";
import UserMenu from "./UserMenu/UserMenu";
import AuthNav from "./AuthNav";
import { authSelectors } from "../redux/auth";
import Toolbar from "@material-ui/core/Toolbar";
import AppBarStyles from "@material-ui/core/AppBar";

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #2A363B",
  },
};

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

  return (
    <AppBarStyles position="static">
      <Toolbar style={styles.header}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Toolbar>
    </AppBarStyles>
  );
}
