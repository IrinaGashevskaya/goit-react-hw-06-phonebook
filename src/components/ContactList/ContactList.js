import React from "react";
import "./ContactList.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/actions";

export default function ContactList() {
  const { contacts } = useSelector((state) => state);
  const dispatch = useDispatch();
  const onDelete = (id) => dispatch(deleteContact(id));
  const filteredContacts = (contacts) => {
    return contacts.items.filter((contact) =>
      contact.name.toLowerCase().includes(contacts.filter.toLowerCase())
    );
  };

  const filterContacts = filteredContacts(contacts);

  return (
    <ul className="list">
      {filterContacts.map((contact) => (
        <li className="item" key={contact.id}>
          <p className="name">
            {contact.name}: {contact.number}
          </p>
          {
            <button
              className="button"
              data-key={contact.id}
              type="button"
              name="delete"
              onClick={(e) => onDelete(contact.id)}
            >
              Delete
            </button>
          }
        </li>
      ))}
    </ul>
  );
}
