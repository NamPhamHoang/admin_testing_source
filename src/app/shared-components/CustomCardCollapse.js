import React from "react";
import { Collapse } from "react-bootstrap";
import { PENDING_INVITATION } from "../constants/types";


const CustomCardCollapse = ({id, title, content, isCollapse, handleCollapse, amountValues}) => {
    return (
        <div className="card shadow mb-4">  
                {/* Card Header - Accordion */}
                <a
                  onClick={handleCollapse}
                  className="d-block card-header py-3 text-decoration-none bg-custom-secondary collapsed"
                  data-toggle="collapse"
                  role="button"
                  aria-expanded="true"
                  aria-controls="collapseCardAction"
                >
                  <h5 className="m-0 text-center text-white">
                    {title} <span className="small">({amountValues})</span>
                  </h5>
                </a>
                {/* Card Content - Collapse */}
                <Collapse in={isCollapse}>
                  <div className="card-body" id={id}>
                      {content}
                  </div>
                </Collapse>
              </div>
    )
}

export default CustomCardCollapse;