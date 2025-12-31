import React, { useContext } from "react";
import { DataContext } from "../App";


const CompC = () => {
  const name = useContext(DataContext);
  return (
    <div>CompC <br />
      Hello I'm {name}
    </div>
  )
}

export default CompC