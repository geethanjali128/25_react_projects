import React, { useState } from "react";

const Controlled = () => {
  const [value, setValue] = useState(""); //cause re-render
  console.log("controlled");
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default Controlled;
