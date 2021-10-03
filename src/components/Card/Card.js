import React from "react";

import { useSelector } from "react-redux";
import "./styles.scss";

export default React.forwardRef(({ name, balance, index }, ref) => (
  <div className="card" ref={ref}>
    <p className="card-name">{name}</p>
    <p className="card-balance">${balance}</p>
  </div>
));
