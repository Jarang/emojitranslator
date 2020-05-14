import React from 'react'
import './Output.scss';

export interface OutputProps {
  text: string,
};


function Output(props: OutputProps) {
  const { text } = props;

  return (
    <p className='output'>{text}</p>
  );
}

export default Output;
