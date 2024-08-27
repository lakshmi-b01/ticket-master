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

    return (
        <div></div>
    );
}