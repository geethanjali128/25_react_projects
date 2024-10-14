// case-2

import React, { useState } from "react";

function UncontrolledPanel() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <button onClick={() => setIsActive(!isActive)}>Toggle Panel</button>
      {isActive && <div>Panel is Active</div>}
    </div>
  );
}

export default UncontrolledPanel;
