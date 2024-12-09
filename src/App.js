import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName && !lastName) {
      setErrorMessage("Both fields are required.");
      setFullName("");
      return;
    }

    if (!firstName || !lastName) {
      setErrorMessage("Both fields must be filled.");
      setFullName("");
      return;
    }

    setFullName(`${firstName} ${lastName}`);
    setErrorMessage("");
  };

  return (
    <div className="App">
      <h1>Full Name Display</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="first-name"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          id="last-name"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      {fullName && <h2>Full Name: {fullName}</h2>}
    </div>
  );
};

export default App;
