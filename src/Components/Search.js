import React, { useState } from "react";
export default function Search(props) {
  const [sample, setSample] = useState("");
  const changeTextHandler = (e) => {
    setSample(e.target.value);
  };
  const submitData = (e) => {
    e.preventDefault();
    props.searchUsers(sample);
    setSample("");
  };
  return (
    <div>
      <form action='submit'>
        <input
          type='text'
          name='text'
          value={sample}
          onChange={changeTextHandler}
          placeholder='User Name'
          required
        />
        <button type='submit' onClick={submitData}>
          Search User
        </button>
      </form>
    </div>
  );
}
