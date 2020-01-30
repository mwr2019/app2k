import React from 'react';
import './App.css';
import ButtonAppBar from "./Components/topBar";
import SimpleContainer from "./Components/contaier1";
import ContainedButtons from "./Components/buttonone";
import SimpleContainer2 from "./Components/container2";

function App() {
  return (
      <div>
   <ButtonAppBar/>
   <SimpleContainer/>,
   <SimpleContainer2/>
       <ContainedButtons/>,
      </div>
  );
}

export default App;
