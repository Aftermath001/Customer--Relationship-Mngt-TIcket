import React from 'react';
import './addTicketForm.css'; // Import your CSS file
import PropTypes from 'prop-types';



const AddTicketForm = ({ handleOnSubmit, handleOnChange,formData,frmDataError }) => {
    console.log(formData)
  return (
    <div className=' mt-3 addticketform'>
        <h2>ADD NEW TICKET</h2>

      <form onSubmit={handleOnSubmit}>
        <div className="form-group">
          <label>Subject</label>
          <input
            name="subject"
            value={formData.subject}
            // minLength='3'
            onChange={handleOnChange}
            placeholder="Subject"
            required
          />
          <text className='text-danger'>{frmDataError.subject && "Subject is required" }</text>
        </div>

        <div className="form-group">
          <label>Date</label>
          <input
            type="date"
            name="issuedate"
            value={formData.issuedate}
            onChange={handleOnChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Issue Found</label>
          <textarea
            name="detail"
            rows="5" // Adjust rows as needed
            value={formData.detail}
            onChange={handleOnChange}
            required
          />
        </div>

        <button type="submit" className="login-btn" variant='outline-info'>
          Submit
        </button>
      </form>
    </div>
  );
};
AddTicketForm.propTypes ={
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit:PropTypes.func.isRequired,
    formData:PropTypes.object.isRequired,
    frmDataError:PropTypes.object.isRequired,

}

export default AddTicketForm;
