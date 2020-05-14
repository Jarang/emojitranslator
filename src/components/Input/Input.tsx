import React, { useState } from 'react'
import './Input.scss';


export interface InputProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  placeholder: string,
  value: string,
};


function Input(props: InputProps) {
  const { handleChange, placeholder, value } = props;

  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(event) => handleChange(event)}
      className="input"
    />
  );
}

export default Input;
