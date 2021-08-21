import { combineReducers, createReducer } from "@reduxjs/toolkit";
import Contacts from "../redux/contacts";
import { changeFilter, addContact, deleteContact } from "../redux/actions";

const contactReducer = createReducer(
  JSON.parse(window.localStorage.getItem("contacts")) ?? Contacts,
  {
    [addContact]: (state, { payload }) => [...state, payload],
    [deleteContact]: (state, { payload }) => {
      return state.filter(({ id }) => id !== payload);
    },
  }
);

const filter = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items: contactReducer,
  filter: filter,
});
