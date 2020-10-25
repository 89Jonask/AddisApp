import React from "react";
import "./App.css";
import NavigationBar from "./components/navigationbar/NavigationBar";
import CollectionContainer from "./components/collectioncontainer/CollectionConatiner";

function App() {
  return (
    <div className="App">
      <header className="App-header">Alida Bard</header>
      <NavigationBar />
      <CollectionContainer />
    </div>
  );
}

export default App;
