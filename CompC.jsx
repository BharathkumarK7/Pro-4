import { Data } from "../App"


const CompC = ({name}) => {
  return (
    <Data.Consumer>
      {
        (name) => {
          return <h1>Comp C Name is {name}</h1>
        }
      }
    </Data.Consumer>
  )
}

export default CompC