import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { CUSTOMER_PROMISED_CARD, DATE_TIME, MOBILE_LIST, TEAM_MATE, TYPE_OF_BADGE } from "../../constants/types";

const ConfirmForm = ({ values, onSubmitData, onHandleShowModal }) => {
  const [contextType, setContextType] = useState("CONFIRM");
  const transferUpdate = () => {
    setContextType("UPDATE");
  };

  return (
    <Form>
      <Form.Text className="text-muted">
        {contextType === "CONFIRM" ? (
          <label for="recipient-name" className="col-form-label">
            Your offer to{" "}
            <span className="font-weight-bold reliably-blue">
              {values && values.teamMates.length > 0 
              ? values.teamMates.reduce((pre, cur) => {
                return pre + " " + cur
              }) 
              : "no one"}{values.mobileTeamList} {" "}
            </span>{" "}
            (or all selected contacts) reads:{" "}
            <span className="font-weight-bold reliably-orange">Alex</span> has
            offered to make this promise, "{values.customPromiseCard}“ due on{" "}
            <span className="font-weight-bold reliably-blue">2021-06-11 at 19:24 {" "}</span> to
            earn a{" "}
            <span className="font-weight-bold reliably-orange">{values.enterCustomPromiseCard} </span>
            badge?
          </label>
        ) : (
          <div>
            <div className="form-group">
              <label for="recipient-name" className="col-form-label">
                Select what you would like to change:
              </label>
            </div>
            <div className="form-group">
              <label for="recipient-name" className="col-form-label">
                Your Offer to{" "}
                <span className="font-weight-bold reliably-blue update_text" onClick={() => onHandleShowModal("UPDATE", TEAM_MATE)}>
                  {values.teamMates.reduce((pre, cur) => {
                    return pre + " " + cur
                  })}{values.mobileTeamList} {" "}
                </span>
                (or all selected contacts) reads:
                <span className="font-weight-bold reliably-orange"> Alex </span>
                has offered to make this promise,
                <span
                  className="font-weight-bold reliably-blue update_text"
                  onClick={() => onHandleShowModal("UPDATE", CUSTOMER_PROMISED_CARD)}
                >
                  "{values.customPromiseCard}“{" "}
                </span>
                due on{" "}
                <span className="font-weight-bold reliably-blue update_text" onClick={() => onHandleShowModal("UPDATE", DATE_TIME)}>
                  2021-06-11 at 19:24{" "}
                </span>
                to earn a{" "}
                <span className="font-weight-bold reliably-orange update_text" onClick={() => onHandleShowModal("UPDATE", TYPE_OF_BADGE)}>
                  {values.enterCustomPromiseCard} badge.
                </span>
              </label>
            </div>
          </div>
        )}
      </Form.Text>
      <div className="d-flex justify-content-end">
        <Button className="mr-2" variant="primary" type="button" onClick={() => onSubmitData()}>
          Send It
        </Button>
        <Button type="button" onClick={() => transferUpdate()}>
          Change It
        </Button>
      </div>
    </Form>
  );
};

export default ConfirmForm;
