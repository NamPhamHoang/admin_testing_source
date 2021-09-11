/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Collapse } from "react-bootstrap";
import { PENDING_INVITATION } from "../constants/types";
import "../portfolio/style.css";

const CustomCardCollapse = ({
  id,
  title,
  content,
  isCollapse,
  handleCollapse,
  amountValues,
  color,
}) => {
  return (
    <div
      className="card shadow mb-4"
      //  style={{ backgroundColor: "#ff7f41" }}
    >
      {/* Card Header - Accordion */}
      <div style={{ backgroundColor: "#ff7f41" }}>
        <a
          onClick={handleCollapse}
          className={
            color
              ? "d-flex card-header py-3 text-decoration-none  collapsed collaspe2"
              : "d-flex card-header py-3 text-decoration-none bg-custom-secondary collapsed"
          }
          data-toggle="collapse"
          role="button"
          aria-expanded="true"
          aria-controls="collapseCardAction"
          style={{ justifyContent: "space-between", width: "49vw", padding: 0 }}
        >
          <i
            class="fas fa-angle-down"
            style={{
              color: "#fff",
              margin: "5px 0 0 25px",
              transform: !isCollapse ? "rotate(270deg)" : "",
            }}
          ></i>
          <h5
            className="m-0 text-center text-white"
            style={{ width: "11em", whiteSpace: "nowrap" }}
          >
            {title} <span className="small">({amountValues})</span>
          </h5>
        </a>
      </div>
      {/* Card Content - Collapse */}
      <Collapse in={isCollapse}>
        <div className="card-body" id={id}>
          {content}
        </div>
      </Collapse>
    </div>
  );
};

export default CustomCardCollapse;
