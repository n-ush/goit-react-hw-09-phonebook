import React, { useCallback } from "react";
import styles from "./Filter.module.css";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../redux/actions";
import selectors from "../../redux/selectors";
import TextField from "@material-ui/core/TextField";

export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(selectors.getFilter);

  const onChange = useCallback(
    (e) => {
      dispatch(actions.changeFilter(e.target.value));
    },
    [dispatch]
  );

  return (
    <TextField
      id="standard-basic"
      label="Find contacts by name"
      value={value}
      onChange={onChange}
      type="text"
    />
  );
}
