import React, { useRef } from "react";

// handling with ref-without react state
const Uncontrolled = () => {
  const inputRef = useRef(null); //doesn't cause re-render
  console.log("uncontrolled");
  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
};

export default Uncontrolled;
