import React, { useState } from "react";

export default function TicketForm({dispatch}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");

  const priorityLabels = {
    1: "low",
    2: "medium",
    3: "high",
  };

  const clearForm = () => {
    setTitle("");
    setDescription("");
    setPriority("1");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const ticketData = {
      id: new Date().toISOString, 
      title, 
      description,
      priority,
    };
  
    dispatch({
      type:"ADD_TICKET",
      payload: ticketData
    });

    clearForm();
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handlePriorityChange = (event) => {
    setPriority(event.target.value)
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="ticket-form">
        <div>
          <label>Title</label>
          <input
            type="input"
            value={title}
            className="form-input"
            onChange={handleTitleChange}
          ></input>
        </div>

        <div>
          <label>Description</label>
          <textarea
            type="input"
            value={description}
            className="form-input"
            onChange={handleDescriptionChange}
          ></textarea>
        </div>

        <fieldset className="priority-fieldset">
          <legend>Priority</legend>

          {Object.entries(priorityLabels).map(([value, label]) => (
            <label key={value} className="priority-label">
              <input
                type="radio"
                value={value}
                checked={priority === value}
                className="priority-input"
                onChange={handlePriorityChange}
              ></input>
              {label}
            </label>
          ))}
        </fieldset>

        <button type="submit" className="button">submit</button>

      </form>
    </div>
  );
}
