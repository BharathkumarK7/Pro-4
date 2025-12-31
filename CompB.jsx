// CompB.jsx
import React, { useContext } from "react";
import { DataContext } from "../App";
const CompB = () => {
  const name = useContext(DataContext);

  return (
    <div>
      <p>Name from Context: {name}</p>
    </div>
  );
};

export default CompB;
