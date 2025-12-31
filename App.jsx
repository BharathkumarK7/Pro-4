// App.jsx
import { createContext } from "react";
import React from "react";
import CompA from "./comps/CompA";

export const DataContext = createContext();

const App = () => {
  const name = "Bharath";

  return (
    <DataContext.Provider value={name}>
      <div>
        <h1>App Component</h1>
        <CompA />
      </div>
    </DataContext.Provider>
  );
};

export default App;
