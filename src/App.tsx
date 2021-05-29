import { useEffect, useState } from "react";
import "./styles/app.scss";
import DesignCard from "./components/design-card.component";
import * as Data from "./data/data";
import { Design, MessageType } from "./types/types";

export default function App() {
  const allDesigns = Data.allDesigns;
  const [consoleMessage, updateConsoleMessage] = useState(
    "How many sheeps Jumped the fence"
  );
  const [variableName, updateVariableName] = useState<string>("countTheSheeps");
  const [messageType, updateMessageType] = useState<MessageType>("log");

  useEffect(() => {
    console.log("Data", allDesigns);
  }, []);

  return (
    <div className="main">
      <header>
        <div className="header__logo">
          <h1>Colorsole</h1>
          <span>Debug your code with colorful and readable messages</span>
        </div>
        <div className="header__info">
          <span>Contact</span>
        </div>
      </header>
      <input
        value={consoleMessage}
        onChange={(e) => updateConsoleMessage(e.target.value)}
      ></input>
      <br />
      <input
        value={variableName}
        onChange={(e) => updateVariableName(e.target.value)}
      ></input>
      <br />

      <hr />
      {allDesigns.map((element: Design, index: any) => (
        <DesignCard
          key={index}
          design={element}
          consoleMessage={consoleMessage}
          variableName={variableName}
          messageType={messageType}
        />
      ))}
    </div>
  );
}
