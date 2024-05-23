import React from 'react';
import TicketTable from '../../components/ticket-table/TicketTable';
import tickets from '../../assets/data/dummy.json';
import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs';
import { Link } from 'react-router-dom';
import './dashboard.css'; // Import the custom CSS file

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="row">
        <div className="col">
          <BreadCrumbs page="Dashboard" />
        </div>
      </div>

      <div className="row text-center mt-5 mb-2">
        <div className="col">
          <Link to="/addticket">
            <button className="custom-button">Add New Ticket</button>
          </Link>
        </div>
      </div>

      <div className="row text-center mt-5 mb-2">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Total Tickets</h3>
              <p className="card-text">50</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Pending Tickets</h3>
              <p className="card-text">5</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <h4>Recently Added Tickets</h4>
          <hr />
        </div>
      </div>

      <div className="row">
        <div className="col recent-ticket">
          <TicketTable tickets={tickets} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
