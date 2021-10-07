import React from "react";

export default React.forwardRef(({}, ref) => {
  return (
    <div ref={ref} className="card-container">
      <p>NewCard</p>
    </div>
  );
});
