import React from "react";
import { connect } from "react-redux";
import { useEffect } from "react";

import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import "./App.css";
import "modern-normalize/modern-normalize.css";
function App({ contacts }) {
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1 className="header">Phonebook</h1>
      <ContactForm />
      <h2 className="title">Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
const mapStateToProps = (state) => ({
  contacts: state.contacts,
});

export default connect(mapStateToProps)(App);
