import React, { useState, useEffect } from 'react';
import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs';
import SearchForm from '../../components/searchForm/SearchForm';
import tickets from '../../assets/data/dummy.json';
import TicketTable from '../../components/ticket-table/TicketTable';
import { Link } from 'react-router-dom';
import './ticketListing.css'; // Import CSS file

const TicketListing = () => {
  const [str, setStr] = useState('');
  const [dispTicket, setDispTicket] = useState(tickets);

  useEffect(() => {}, [str, dispTicket]);

  const handleOnChange = (e) => {
    const { value } = e.target;
    setStr(value);
    searchTicket(value);
  };

  const searchTicket = (sttr) => {
    const displayTickets = tickets.filter(row => row.subject.toLowerCase().includes(sttr.toLowerCase()));
    setDispTicket(displayTickets);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <BreadCrumbs page="Ticket Lists" />
        </div>
      </div>

      <div className="row align-center">
        <div className="col">
          <Link to="/addticket">
            <button className="custom-button">Add New Ticket</button>
          </Link>
        </div>
        <div className="col text-right">
          <SearchForm handleOnChange={handleOnChange} str={str} className="search-form" />
        </div>
      </div>
      <hr />

      <div className="row">
        <div className="col">
          <TicketTable tickets={dispTicket} />
        </div>
      </div>
    </div>
  );
};

export default TicketListing;
