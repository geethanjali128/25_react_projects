// case-2

import React, { useState } from "react";

function ControlledPanel({ isActive, toggleActive }) {
  return (
    <div>
      <button onClick={toggleActive}>Toggle Panel</button>
      {isActive && <div>Panel is Active</div>}
    </div>
  );
}

function Accordion() {
  const [isActive, setIsActive] = useState(false);

  return (
    <ControlledPanel
      isActive={isActive}
      toggleActive={() => setIsActive(!isActive)}
    />
  );
}

export default Accordion;
