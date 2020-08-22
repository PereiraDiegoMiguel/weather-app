import React, { useState } from 'react';

import './styles.css';

const Search = ({ getQuery }) => {
  const [text, setText] = useState('');

  const onChange = (q) => {
    setText(q);
    getQuery(q);
  }

  return (

    <form className="form_content">
      <div className="data">
        <div>
          <label className="label" htmlFor="estado">Estado</label>
          <select type="text"
            className='form-control'
            placeholder='Estado'
            value={text}
            onChange={(event) => onChange(event.target.value)}
            autoFocus
          />
        </div>

        <div>
          <label className="label" htmlFor="estado">Cidade</label>
          <select type="text"
            className='form-control'
            placeholder='Cidade'
            value={text}
            onChange={(event) => onChange(event.target.value)}

          />
        </div>
      </div>

    </form>

  )
}

export default Search;