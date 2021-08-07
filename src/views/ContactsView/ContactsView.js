import React, { useEffect } from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import Filter from "../../components/Filter/Filter";
import { useDispatch, useSelector } from "react-redux";
import operations from "../../redux/operations";
import selectors from "../../redux/selectors";

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectors.getLoading)

  useEffect(() => {
    dispatch(operations.fetchContacts())
  }, [dispatch])
  

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
        {isLoading && <h1>Loading...</h1>}
      </div>
    );
}
