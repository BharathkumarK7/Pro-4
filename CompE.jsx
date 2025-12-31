import React, {useContext} from "react";

import { DataContext } from "../App";

const CompE = () => {
  const name = useContext(DataContext);
  return (
    <div>CompE <br />
      Hello I'm {name}
    </div>
  )
}

export default CompE; 