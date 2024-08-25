import React, { useState } from 'react';

const UserInput = ({ setUserName }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserName(input);
  };

  return (
    <div className="user-input">
      <h2>Please Enter Your Name:</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="user-input-field"
        />
        <button type="submit" className="user-input-btn">
          Start
        </button>
      </form>
    </div>
  );
};

export default UserInput;
