import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Select from "react-select";
import {
  CUSTOMER_PROMISED_CARD,
  DATE_TIME,
  TEAM_MATE,
  TYPE_OF_BADGE,
} from "../../constants/types";

const UpdateForm = ({ onUpdate, onHandleShowModal, type }) => {
    const [updateValues, setUpdateValue] = useState();
  const people = [
    { value: "Andy Muller", label: "Andy Muller" },
    { value: "John Adam", label: "John Adam" },
    { value: "Pat Stumuler", label: "Pat Stumuler" },
    { value: "Victor Naval", label: "Victor Naval" },
  ];

  const badge = [
    { value: 'Teamwork', label: 'Teamwork' },
    { value: 'Confidence', label: 'Confidence' },
    { value: 'Champion', label: 'Champion' },
    { value: 'Leadership', label: 'Leadership'},
    { value: 'Communication', label: 'Communication'}
]

const promiseCard = [
    { value: 'I promise to extend a helping hand to a fellow team member this week', label: 'I promise to extend a helping hand to a fellow team member this week' },
    { value: 'I promise to respond cooperatively to a request from a teammate this week', label: 'I promise to respond cooperatively to a request from a teammate this week' },
]

const onHandleChangeSelect = (typeUpdate) => (e) => {
    switch(typeUpdate) {
        case TYPE_OF_BADGE: setUpdateValue(e.value); break;
        case TEAM_MATE:  setUpdateValue(Array.isArray(e)?e.map(x=> x.value):[]); break;
        case CUSTOMER_PROMISED_CARD: setUpdateValue(e.value); break;
        default: break;
    }
}

const onUpdateField = () => {
onUpdate(updateValues)
onHandleShowModal("CONFIRM")
}
  let content;
  switch (type) {
    case TEAM_MATE:
      {
        content = (
          <Form.Group>
            <Form.Text className="text-muted">
              Select the person to whom you want to send the Offer from list below. Or, if not listed, enter the contact number
            </Form.Text>
            <Select
              className="mb-3"
              isMulti
              options={people}
              placeholder="Select a teammate or teammates"
              onChange = {onHandleChangeSelect(TEAM_MATE)}
            />
          </Form.Group>
        );
      }
      break;
    case TYPE_OF_BADGE:
      {
        content = (
          <Form.Group>
            <Form.Text className="text-muted">
            Select a Badge
            </Form.Text>
            <Select
              className="mb-3"
              options={badge}
              placeholder="Select A Badge"
            />
          </Form.Group>
        );
      }
      break;
    case CUSTOMER_PROMISED_CARD:
      {
        content = (
          <Form.Group>
            <Form.Text className="text-muted">
            Select or choice a custom Promise Card
            </Form.Text>
            <Select
              className="mb-3"
              options={promiseCard}
              placeholder="Select A Promise Card"
              onChange = {onHandleChangeSelect(CUSTOMER_PROMISED_CARD)}
            />
          </Form.Group>
        );
      }
      break;
    case DATE_TIME:
      {
        content = (
          <Form.Group>
            <Form.Text className="text-muted">
            Please provide a comletionn date and time
            </Form.Text>
            <Select
              className="mb-3"
              options={people}
              isMultiplaceholder="Select a teammate or teammates"
              onChange = {onHandleChangeSelect(DATE_TIME)}
            />
          </Form.Group>
        );
      }
      break;
    default:
      break;
  }

  return (
    <>
      <Form>
        {content}
        <hr/>
        <div className="d-flex justify-content-end">
          <Button className="mr-2" variant="primary" type="button" onClick={() => onUpdateField()}>
            Update
          </Button>
          <Button type="button">
            Close
          </Button>
        </div>
      </Form>
    </>
  );
};

export default UpdateForm;
