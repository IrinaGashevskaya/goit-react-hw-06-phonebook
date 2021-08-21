import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/actions";
import "./Filter.css";
export default function Filter() {
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const handleChangeFilter = (e) => dispatch(changeFilter(e.target.value));

  return (
    <label className="label" name="filter" htmlFor="filter" value={filter}>
      Find contacts by name
      <input
        className="input-filter"
        type="text"
        id="filter"
        onChange={handleChangeFilter}
      />
    </label>
  );
}
