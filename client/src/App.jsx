import Header from "./components/header/Header";
import Cards from "./components/cards/cards";
import Conocenos from "./components/conocenos/conocenos";
import Form from "./components/form/form";
import Carrousel from "./components/carrousel/carrousel"
import React from "react";


function App() {
  return (
    <div className="App">
      <Header />
      <Cards />
      <Conocenos />
      <Carrousel/>
    </div>
    );
}

export default App;
