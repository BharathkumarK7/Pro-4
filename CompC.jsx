import {useContext} from "react";

import { Data, Data1 } from "../App"


const CompC = () => {
  const userName = useContext(Data);
  const age = useContext(Data1);
  

  return (
    <h1>My name {userName} and age is {age}</h1>
  )
}

export default CompC