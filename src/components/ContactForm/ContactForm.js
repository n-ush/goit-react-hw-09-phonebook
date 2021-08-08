import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import shortid from "shortid";
import operations from "../../redux/operations";
import selectors from "../../redux/selectors";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

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
    <form onSubmit={handleSubmit} noValidate autoComplete="off">
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={2}>
          <TextField
            label="Name"
            variant="outlined"
            value={name}
            type="text"
            name="name"
            id={nameInputId}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={2}>
          <TextField
            label="Number"
            variant="outlined"
            value={number}
            id={numberInputId}
            onChange={handleChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </Grid>

        <Grid item xs={2}>
          <Button variant="contained" color="primary" type="submit">
            Add contact
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
