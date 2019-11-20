import React, { useState } from "react";
import { selectedNumber } from "../ButtonComponents/NumberButtons/Numbers";

const Display = () => {
  return(
    <div className="display">
      {selectedNumber}
    </div>
  );
};

export default Display;