import React, { useState } from "react";

export default function TicketForm() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('1');

    const priorityLabels = {
        1: 'low',
        2: 'medium',
        3: 'high'
    };

    const handleInputChange = (event) => {
        setDescription(event.target.value);
    };

    return (
      <div>
        <h2>Enter Description:</h2>
        <textarea
          value={description}
          onChange={handleInputChange}
          placeholder="Type your description here..."
          rows="4"
          cols="50"
        />
        <div style={{ marginTop: "20px" }}>
          <h3>Your Description is:</h3>
          <p>{description}</p>
        </div>
      </div>
    );
}