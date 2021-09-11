import React from "react";
import { Form, Button } from "react-bootstrap";

const RequestConfirmForm = ({ values, onSubmitData, onHandleShowModal }) => {
  return (
    <Form>
       <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Text className="text-muted">
                You have entered the following explanation
            </Form.Text>
            <Form.Text className="text-muted">
                {values.enterCustomPromiseCard}
            </Form.Text>
        </Form.Group>
      <hr />
      <div className="d-flex justify-content-end">
      <Button
          className="mr-2"
          variant="primary"
          type="button"
          onClick={() => onSubmitData()}
        >
          Send It
        </Button>
        <Button type="button" onClick={() => onHandleShowModal("UPDATE")}>
          Change It
        </Button>
      </div>
    </Form>
  );
};

export default RequestConfirmForm;
