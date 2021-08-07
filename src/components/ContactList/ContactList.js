import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./ContactList.module.css";
import operations from "../../redux/operations";
import selectors from "../../redux/selectors";

export default function ContactList() {
  const contacts = useSelector(selectors.getFilteredContacts);
  const dispatch = useDispatch();
  const onDelete = (id) => dispatch(operations.deleteContact(id));

  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={styles.list_item}>
          <div className={styles.contact}>
            <p>{name}:</p>
            <p>{number}</p>
          </div>
          <button onClick={() => onDelete(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
