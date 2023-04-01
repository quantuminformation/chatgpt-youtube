import { useState } from "react";
import "./App.css";
import { ChatGPT } from "./components/ChatGPT";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <ChatGPT />
    </div>
  );
}

export default App;
