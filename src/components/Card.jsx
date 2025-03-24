import React from "react";
import PropTypes from "prop-types";

const Card = ({ icon, color, category, marks }) => {
  return (
    <div className="card">
      <div className="card-left">
        {icon}
        <p>{category}</p>
      </div>
      <div className="card-right">
        <p>
          <span className="optain-marks">{marks}</span>
          /100
        </p>
      </div>
    </div>
  );
};

Card.propTypes = {
  icon: PropTypes.element.isRequired,
  color: PropTypes.string,
  category: PropTypes.string.isRequired,
  marks: PropTypes.number.isRequired,
};

Card.defaultProps = {
  color: "#000000",
};
export default Card;
