import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import shortid from "shortid";
import styles from "./ContactForm.module.css";
import operations from "../../redux/operations";
import selectors from "../../redux/selectors";

export default function ContactForm() {
  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();
  const contacts = useSelector(selectors.getFilteredContacts);

  const handleChange = (evt) => {
    const { name, value } = evt.target;

    switch (name) {
      case "name":
        setName(value);
        break;

      case "number":
        setNumber(value);
        break;

      default:
        console.warn(`Тип поля name - ${name} не обрабатывается`);
    }
  };

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      contacts.find((contact) => contact.name === name)
        ? alert(`${name} is already in contacts`)
        : contacts.find((contact) => contact.number === number)
        ? alert(`${number} is already in contacts`)
        : dispatch(operations.addContact({ name, number }));
      setName("");
      setNumber("");
    },
    [dispatch, name, number, contacts]
  );

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label htmlFor={nameInputId}>Name</label>
      <input
        value={name}
        type="text"
        name="name"
        id={nameInputId}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        onChange={handleChange}
        className={styles.input}
      />

      <label htmlFor={numberInputId}>Number</label>
      <input
        value={number}
        id={numberInputId}
        onChange={handleChange}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
        className={styles.input}
      />

      <button type="submit" className={styles.btn}>
        Add contact
      </button>
    </form>
  );
}
