import React, { useCallback } from "react";
import styles from "./Filter.module.css";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../redux/actions";
import selectors from "../../redux/selectors";

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
    <label>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={onChange}
        className={styles.input}
      />
    </label>
  );
}
