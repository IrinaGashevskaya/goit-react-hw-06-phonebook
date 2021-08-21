import React from "react";
import "./ContactForm.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addContact } from "../../redux/actions";
const ContactForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const { contacts } = useSelector((state) => state);
  const dispatch = useDispatch();

  const onAddContacts = (name, phone) => dispatch(addContact(name, phone));

  const handleSubmit = (e) => {
    e.preventDefault();
    const isAdded = (name) =>
      contacts.items.map((contact) => contact.name).includes(name);

    if (isAdded(name)) {
      return alert(`${name} is already in contacts`);
    } else {
      onAddContacts(name, number);
    }

    setName("");
    setNumber("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="label-form">
        Name
        <input
          className="input"
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label className="label-form">
        Number
        <input
          className="input"
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={(e) => setNumber(e.target.value)}
        />
      </label>
      <button className="button-form" type="submit">
        Add contact
      </button>
    </form>
  );
};
export default ContactForm;
