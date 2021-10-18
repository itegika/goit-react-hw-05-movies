import React, { useState } from "react";
import styles from "./SearchForm.module.css";

function SearchForm({ onSubmit }) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);
    reset();
  };

  const reset = () => {
    setValue("");
  };

  return (
    <form className={styles.SearchForm} onSubmit={handleSubmit}>
      <button type="submit" className={styles.SearchFormButton}>
        <span className={styles.SearchFormButtonLabel}>Search</span>
      </button>
      <input
        className={styles.SearchFormInput}
        type="text"
        name="input"
        autoComplete="off"
        autoFocus
        placeholder="Search movie"
        value={value}
        onChange={handleChange}
      />
    </form>
  );
}

export default SearchForm;
