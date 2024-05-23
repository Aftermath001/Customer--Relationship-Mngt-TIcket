import React from 'react';
import { Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './replyTicket.css'; 

const ReplyTicket = ({msg, handleOnChange, handleOnSubmit}) => {
  return (
    <Form className="reply-form" onSubmit ={handleOnSubmit}>
      <Form.Label className="reply-form-label">Reply</Form.Label>
      <Form.Text className="reply-form-text">Please reply here or update ticket message</Form.Text>
      <Form.Control name="" value={msg} onChange={handleOnChange}  as="textarea" rows="5" />
      <div className="reply-form-submit text-right">
        <Button variant="info" type="submit">
          Reply
        </Button>
      </div>
    </Form>
  );
};
ReplyTicket.propTypes ={
  handleOnChange:PropTypes.func.isRequired,
  handleOnSubmit:PropTypes.func.isRequired,
  msg:PropTypes.string.isRequired,
}

export default ReplyTicket;
