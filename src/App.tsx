import React, { useState } from 'react';
import './App.scss';
import Input from './components/Input/Input';
import Output from './components/Output/Output';



function App() {

  const [text, setText] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVal = event.target.value.toString();
    console.log(newVal)
    setText(newVal);
    if (newVal != '') {
      // TODO: implement functionality.
    }
  };

  return (
    <div className="app">
      <div className="middle">
        <Input
          placeholder="Enter text"
          value={text}
          handleChange={handleChange}
        />
        <Output text={text} />
      </div>
    </div>
  );
}

export default App;
