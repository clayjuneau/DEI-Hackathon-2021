import './App.css';
import React, { useState } from "react";
import { Button } from "@valassis/icon-components";

function App() {
  const [buttonClickText, setText] = useState("");

  return (
    <div className="App">
      <Button
        className="btn-primary"
        text="Click Me!"
        onClick={() => setText("Button was clicked!")}
      />
    </div>
  );
}

export default App;