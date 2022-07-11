import React from "react";
import "./App.css";
import Clock from "./components/Clock";
import List1 from "./components/List1";
import List2 from "./components/List2";

function App() {
  return (
    <div className="App" style={{display:'block' }}> 
    <Clock/>
      {/* Clock */}
      {/* List 1  initialValues [1, 2, 3] */}
      <div style={{display:'flex', justifyContent:'center'}}>
      <List1 initialValues ={[1, 2, 3]}/>
      {/* List 2  initialValues [4, 5] */}
      <List2 initialValues={[4, 5]} />
      </div>
    </div>
  );
}

export default App;
