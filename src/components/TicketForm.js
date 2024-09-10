import React, { useState, useEffect } from "react";

export default function TicketForm({dispatch, editingTicket}) {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");

  useEffect(() => {
    if(editingTicket){
      setTitle(editingTicket.title)
      setDescription(editingTicket.description)
      setPriority(editingTicket.priority)
    }else{
      clearForm();
    }
  }, [editingTicket]);

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
      id: editingTicket? editingTicket.id : new Date().toISOString(), 
      title, 
      description,
      priority,
    };
  
    dispatch({
      type: editingTicket? "UPDATE_TICKET" : "ADD_TICKET",
      payload: ticketData
    });

    clearForm();
  };

  const handleCancel = () => {
    dispatch({type: "DELETE_EDITING_TICKET"})
    clearForm();
  }

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

        <button type="submit" className="button">
          submit
        </button>

        {editingTicket ? (
          <button type="button" onClick={handleCancel} className="button">
            cancel edit
          </button>
        ) : (
          <button type="button" onClick={clearForm} className="button">
            cancel submit
          </button>
        )}

      </form>
    </div>
  );
}
