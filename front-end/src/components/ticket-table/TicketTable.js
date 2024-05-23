import React from 'react'
import {Table} from 'react-bootstrap'
import PropTypes from 'prop-types';

const TicketTable = ({tickets}) => {
  return (
    <Table stripped bordered hover>
        <thead>
            <th>#</th>
            <th>Subject</th>
            <th>Status</th>
            <th>Opened Date</th>
        </thead>

        <tbody>
        {tickets.length ? (
          tickets.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.subject}</td>
              <td>{row.status}</td>
              <td>{row.addedAt}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4" className="text-center">
              No ticket Available
            </td>
          </tr>
        )}
            
        </tbody>
    </Table>
  )
}
TicketTable.propTypes ={
  tickets:PropTypes.array.isRequired,
}

export default TicketTable