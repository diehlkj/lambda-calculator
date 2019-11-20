import React, { useState } from "react";
import { operators } from "../../../data";
import OperatorButton from "./OperatorButton"

//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operatorState, setOperatorState] = useState(operators);
  console.log(`operatorState: ${operatorState}`);
  return (
    <div>
      {operatorState.map((operator, index) => {
        return (
          <OperatorButton 
            key={index}
            button={operator}
          />
        );
      })}
    </div>
  )
    
};

export default Operators;