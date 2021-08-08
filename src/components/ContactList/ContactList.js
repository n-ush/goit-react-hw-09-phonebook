import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./ContactList.module.css";
import operations from "../../redux/operations";
import selectors from "../../redux/selectors";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContactList() {
  const contacts = useSelector(selectors.getFilteredContacts);
  const dispatch = useDispatch();
  const onDelete = (id) => dispatch(operations.deleteContact(id));
  const classes = useStyles();

  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={styles.list_item}>
          <div className={styles.contact}>
            <p>{name}:</p>
            <p>{number}</p>
          </div>

          <IconButton aria-label="delete" onClick={() => onDelete(id)}>
            <DeleteIcon />
          </IconButton>
        </li>
      ))}
    </ul>
  );
}
