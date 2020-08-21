import React, { useState } from 'react';

import './styles.css';

const Search = ({ getQuery }) => {
  const [text, setText] = useState('');

  const onChange = (q) => {
    setText(q);
    getQuery(q);
  }

  return (
    <section className='search'>
      <form>
        <h1>Hello</h1>
        <select type="text"
          className='form-control'
          placeholder='Search characters'
          value={text}
          onChange={(event) => onChange(event.target.value)}
          autoFocus
        />
      </form>
    </section>

  )
}

export default Search;