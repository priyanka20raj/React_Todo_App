import React, { useState } from "react";

function InputArea() {
  const [numbers, setNumbers] = useState(0);
  return (
    <div className="input-box">
      <input
        type="text"
        placeholder="Enter Numbers ..."
        value={numbers}
        onChange={(e) => setNumbers(e.target.value)}
      />
    </div>
  );
}

export default InputArea;
