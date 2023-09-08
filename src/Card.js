import React from "react";

const Card = ({ title, val, iconClass, borderColor, textColor }) => (
  <div className="col-xl-3 col-md-6 mb-4">
    <div
      className={`card ${borderColor} shadow h-100 py-2`}
      style={{ backgroundColor: "#f0f0f0", padding: "10px" }}
    >
      <div className="card-body">
      <i className={iconClass}></i>
        <div className="row no-gutters align-items-center">
          <div className="col mr-2">
            <div  className={`text-xs font-weight-bold ${textColor} text-uppercase mb-1`}> {title}  </div>
             <div className="h5 mb-0 font-weight-bold text-gray-800">{val}</div>
          </div>
          <div className="col-auto">
            <i className={iconClass}></i>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default Card;