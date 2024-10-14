import React, { useState } from 'react';

export default function HeaderInput (props) {
    
    const [value, setValue] = useState('');
    console.log(value);
    
    return (
    <input 
    className="header__input" 
    placeholder="What needs to be done?" 
    autoFocus
    value={value} 
    onChange={(event) => setValue(event.target.value)}
    onKeyDown={ e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        props.putTodo(value);
        setValue('');
      }
    } }
    />
  );
  }
