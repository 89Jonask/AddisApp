import React from "react";
import "./App.css";
import { NavigationBar } from "./components/navigationbar/NavigationBar";
import { CollectionContainer } from "./components/collectioncontainer/CollectionConatiner";
import { Routing } from "./routes/Routing.js";
import { UserProvider } from "./shared/global/provider/UserProvider";

function App() {
  return (
    <UserProvider>
      <Routing>
        <div className="App">
          <header className="App-header">Alida Bard</header>
          <NavigationBar />
          <CollectionContainer />
        </div>
      </Routing>
    </UserProvider>
  );
}

export default App;
