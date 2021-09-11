/* eslint-disable default-case */
import React from "react";
import { Form, Button } from "react-bootstrap";
import Select from "react-select";
import { MODAL_OFFER_TYPE } from "../../constants/types";

const InputForm = ({
  values,
  setValues,
  onSubmit,
  onHandleShowModal,
  modalType,
}) => {
  const people = [
    { value: "Andy Muller", label: "Andy Muller" },
    { value: "John Adam", label: "John Adam" },
    { value: "Pat Stumuler", label: "Pat Stumuler" },
    { value: "Victor Naval", label: "Victor Naval" },
  ];

  const badge = [
    { value: "Teamwork", label: "Teamwork" },
    { value: "Confidence", label: "Confidence" },
    { value: "Champion", label: "Champion" },
    { value: "Leadership", label: "Leadership" },
    { value: "Communication", label: "Communication" },
  ];

  const promiseCard = [
    {
      value:
        "I promise to extend a helping hand to a fellow team member this week",
      label:
        "I promise to extend a helping hand to a fellow team member this week",
    },
    {
      value:
        "I promise to respond cooperatively to a request from a teammate this week",
      label:
        "I promise to respond cooperatively to a request from a teammate this week",
    },
  ];

  const handleChange = (prop) => (event) => {
    setValues({
      ...values,
      [prop]: event.target.value,
    });
  };
  // const onHandleChangeSelect = (type) => (e) => {
  //   switch (type) {
  //     case "BADGE":
  //       setValues({
  //           ...values,
  //           [prop]: e.target.value
  //       })
  //   }
  const onHandleChangeSelect = (type) => (e) => {
    switch (type) {
      case "BADGE":
        setValues({
          ...values,
          typeOfBadge: e.value,
        });
        break;
      case "PEOPLE":
        setValues({
          ...values,
          teamMates: Array.isArray(e) ? e.map((x) => x.value) : [],
        });
        break;
      case "PROMISE":
        setValues({
          ...values,
          customPromiseCard: e.value,
        });
        break;
    }
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Text className="text-muted">
          Select the type of badge that you will issue from the list
        </Form.Text>
        <Select
          options={badge}
          onChange={onHandleChangeSelect("BADGE")}
          placeholder="Select A Promise Card"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Text className="text-muted">
          Select or enter a custom Promise Card.
        </Form.Text>
        <Select
          className="mb-3"
          options={promiseCard}
          onChange={onHandleChangeSelect("PROMISE")}
          placeholder="Select A Promise Card"
        />
        <Form.Control
          type="text"
          placeholder="Or enter a custom promise card"
        />
      </Form.Group>

      <Form.Text className="text-muted">
        Select the person to whom you want to send the offer from the list below
      </Form.Text>
      <Select
        className="mb-3"
        options={people}
        isMulti
        onChange={onHandleChangeSelect("PEOPLE")}
      />
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          onChange={handleChange("mobileTeamList")}
          type="email"
          placeholder="Or, if not listed, enter the mobile number in international format"
        />
      </Form.Group>
      <hr />
      <div className="d-flex justify-content-end">
        <Button
          className="mr-2"
          variant="primary"
          type="button"
          onClick={() => {
            onHandleShowModal("CONFIRM");
            onSubmit(values);
          }}
        >
          {modalType === MODAL_OFFER_TYPE ? "Send Offer" : "Send Invitation"}
        </Button>
        <Button type="button">Cancel</Button>
      </div>
    </Form>
  );
};

export default InputForm;
