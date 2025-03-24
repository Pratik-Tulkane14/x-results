import React from "react";

const Card = ({ icon, color, category, marks }) => {
  console.log(icon, category, marks);
  return (
    <>
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
    </>
  );
};
export default Card;
