import React, { Suspense, lazy, useEffect } from "react";
import { Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
// import HomeView from "./views/HomeView";
// import RegisterView from "./views/RegisterView";
// import LoginView from "./views/LoginView";
import Container from "./components/Container/Container";
import AppBar from "./components/AppBar";
// import ContactsView from "./views/ContactsView/ContactsView";
import { authOperations } from "./redux/auth";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

const HomeView = lazy(() => import("./views/HomeView"));
const RegisterView = lazy(() => import("./views/RegisterView"));
const LoginView = lazy(() => import("./views/LoginView"));
const ContactsView = lazy(() => import("./views/ContactsView/ContactsView"));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch])

    return (
      <Container>
        <AppBar />

        <Suspense fallback={<p>Загружаем...</p>}>
          <Switch>
            <PublicRoute exact path="/">
            <HomeView />
              </PublicRoute>
              
            <PublicRoute
              path="/register"
              restricted
              redirectTo="/contacts"
            >
              <RegisterView />
            </PublicRoute>

            <PublicRoute
              path="/login"
              restricted
              redirectTo="/contacts"
            >
              <LoginView />
            </PublicRoute>
            <PrivateRoute
              path="/contacts"
              redirectTo="/login"
            >
              <ContactsView />
            </PrivateRoute>
          </Switch>
        </Suspense>
      </Container>
    );
}