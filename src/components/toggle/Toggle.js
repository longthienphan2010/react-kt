import React, { useState } from "react";
import "./ToggleStyles.css";
// Stateless Functional Component (Not using state)
// function Toggle() {
//   return <div className="toggle"></div>;
// }
// Statefull Functional Component (Use state)

// function Toggle2() {
//   // [count, setCount] = useState();
//   return <div className="toggle2"></div>;
// }

function Toggle() {
  const [on, setOn] = useState(false);
  const handleToggle = () => setOn((on) => !on);
  return (
    <div>
      <div className={`toggle ${on ? "active" : ""}`} onClick={handleToggle}>
        <div className={`spinner ${on ? "active" : ""}`}></div>
      </div>
      {/* <div className="toggle-control">
        <div className="toggle-on" onClick={() => setOn(true)}>
          On
        </div>
        <div className="toggle-off" onClick={() => setOn(false)}>
          Off
        </div>
      </div> */}
    </div>
  );
}

export default Toggle;
