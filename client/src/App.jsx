import Header from "./components/header/Header";
import Cards from "./components/cards/cards";
import Conocenos from "./components/conocenos/conocenos";
import Carrousel from "./components/carrousel/carrousel"
import Login from "./components/header/Login";
import React from "react";


function App() {
  return (
    <div className="App">
      <Header />
      <Login />
      <Cards />
      <Conocenos />
      <Carrousel/>
    </div>
    );
}

export default App;
