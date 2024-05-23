import React, {useState, useEffect}from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs.js'
import AddTicketForm from '../../components/addTicketForm/AddTicketForm.js'
import { shortText } from "../../utils/validation";


const initialFormData= {
    subject:"",
    issueDate:"",
    detail:"",
}
const initialFrmError = {
    subject: false,
    issueDate: false,
    message: false,
};

const AddTicket = () => {
    const [formData, setFormData] = useState(initialFormData);
    const [frmDataError, setFrmDataError] = useState(initialFrmError);

    useEffect(() => {}, [formData, frmDataError])

    const handleOnChange = (e) =>{
        const {name, value} =e.target


        setFormData({
            ...formData,
            [name]:value
        })
        // console.log(name, value)
    }
    const handleOnSubmit = async (e) => {
        e.preventDefault()


        setFrmDataError(initialFrmError);

        const isSubjectValid = await shortText(formData.subject);

        setFrmDataError({
        ...initialFrmError,
        subject: !isSubjectValid,
        });
        console.log("Submit Request Received", formData)
    }
  return (
<Container>
    <Row>
        <Col>
            <BreadCrumbs page='New Ticket'/>
        </Col>
    </Row>

    <Row>
        <Col>
            <AddTicketForm 
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            formData ={formData}
            frmDataError={frmDataError}
            />
        </Col>
    </Row>
</Container>
  )
}

export default AddTicket