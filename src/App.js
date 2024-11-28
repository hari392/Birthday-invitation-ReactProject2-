import React, { useState } from "react";
import InvitationCard from "./components/InvitationCard";
import InvitationDetails from "./components/InvitationDetails";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      {!isOpen ? (
        <InvitationCard onOpen={() => setIsOpen(true)} />
      ) : (
        <InvitationDetails />
      )}
    </div>
  );
}

export default App;
