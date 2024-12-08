import React, { useState } from "react";

function App() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [fullName, setFullName] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page reload
        if (!firstName.trim() || !lastName.trim()) {
            setError("Both fields are required.");
            setFullName(""); // Clear full name display
            return;
        }
        setError(""); // Clear error
        setFullName(`${firstName} ${lastName}`);
    };

    return (
        <div style={{ fontFamily: "Arial, sans-serif", margin: "20px" }}>
            <h1>Full Name Form</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        type="text"
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <br />
                <div>
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        type="text"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <br />
                <button type="submit">Submit</button>
            </form>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {fullName && <h2>Full Name: {fullName}</h2>}
        </div>
    );
}

export default App;
