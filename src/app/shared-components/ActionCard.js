import React, { forwardRef } from "react";
import * as PropTypes from "prop-types";

const ActionCard = forwardRef((props) => {
  return <div></div>;
});

ActionCard.propTypes = {
  header: PropTypes.node,
  content: PropTypes.node,
};

ActionCard.defaultProps = {};
return ActionCard;
