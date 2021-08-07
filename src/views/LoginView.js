import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../redux/auth";

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 15,
  },
};

export default function LoginView() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleChange = (evt) => {
    const { name, value } = evt.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;

      case "password":
        setPassword(value);
        break;

      default:
        console.warn(`Тип поля name - ${name} не обрабатывается`);
    }
  };

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      dispatch(authOperations.logIn({ email, password }));
      setEmail("");
      setPassword("");
    },
    [dispatch, email, password]
  );

  return (
    <div>
      <h1>Страница логина</h1>
      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <label style={styles.label}>
          Почта
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <label style={styles.label}>
          Пароль
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Войти</button>
      </form>
    </div>
  );
}
