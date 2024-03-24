import React from 'react'
import css from './SearchBox.module.css';
import { useState } from 'react';
function SearchBox({ inputValue, handleChange }) {

//   const [inputValue, setInputValue] = useState("");
// const handleChange=(evt)=>{setInputValue(evt.target.value)}
  return (
    <div className={css.searchBoxContainer}>
      <label htmlFor="searchBar" className={css.searchBoxLabel}>Find contacts by name</label>
      <input type="text" className={css.searchBoxInput} id="searchBar" placeholder='Search....' value={inputValue} onChange={handleChange}/>
     
    </div>
  );
}


export default SearchBox