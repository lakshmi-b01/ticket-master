import React from "react";
import TicketItem from "./TicketItem";

export default function TicketList({tickets, dispatch}){
    return (
        <div className="ticket-list"> 
        {
            tickets.map(ticket => (
                <TicketItem key={tickets.id} ticket={ticket} dispatch={dispatch}></TicketItem>
            ))
        }
        </div>
    );
}