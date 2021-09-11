import React from "react";
import { Form, Button } from "react-bootstrap";

const AcceptInputForm = ({values, setValues, onSubmit, onHandleShowModal}) => {
    const handleChange = prop => event => {
        setValues({
            ...values,
            [prop]: event.target.value
        })
    }

    return (
        <>
            <Form>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Text className="text-muted">
                    Update what did you go do to keep your promise?
                </Form.Text>
                <Form.Control type="text" placeholder="Your details here..." onChange={handleChange("enterCustomPromiseCard")}/>
            </Form.Group>
            <hr/>
            <div className="d-flex justify-content-end">
                <Button 
                    className="mr-2" 
                    variant="primary" 
                    type="button" 
                    onClick={() => {
                        onHandleShowModal("CONFIRM")
                        onSubmit(values)
                    }}
                >
                   Submit
                </Button>
                <Button 
                    type="button"
                    onClick={() => {
                        onHandleShowModal("UPDATE")
                        onSubmit(values)
                    }}
                >
                    Change It
                </Button>
            </div>
        </Form>
        
        </>
    )
}

export default AcceptInputForm