import React, { useState, useEffect } from 'react';
import './ticket.css';
import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs.js';
import tickets from '../../assets/data/dummy.json';
import MessageHistory from '../../components/messageHistory/MessageHistory';
import ReplyTicket from '../../components/replyTicket/ReplyTicket';

const ticket = tickets[0];

const Ticket = () => {
  const [message, setMessage] = useState('');
  useEffect(() => {}, [message]);

  const handleOnChange = (e) => {
    setMessage(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted');
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <BreadCrumbs page="Ticket" />
        </div>
      </div>

      <div className="row tickets">
        <div className="col">
          <div className="ticket-details">
            <div className="subject">Subject: {ticket.subject}</div>
            <div className="date">Date: {ticket.addedAt}</div>
            <div className="status">Status: {ticket.status}</div>
          </div>
        </div>

        <div className="col text-right">
          <button className="custom-button">Close Ticket</button>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col">
          <MessageHistory msg={ticket.history} />
        </div>
      </div>
      <hr />

      <div className="row mt-4">
        <div className="col">
          <ReplyTicket
            msg={message}
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default Ticket;
