import { CSSProperties, useEffect, useMemo, useState } from "react";
import { buildConsoleString, copyToClipboard } from "../helpers/helpers";
import { Design, messageType } from "../types/types";

interface Props {
  design: Design;
  consoleMessage: string;
  variableName: string;
  messageType: messageType;
}

export default function DesignCard(props: Props) {
  const [finalString, updateFinalString] = useState("");
  const styles: CSSProperties = useMemo(() => {
    return {
      fontFamily: props.design.fontFamily,
      fontSize: props.design.fontSize,
      fontStyle: props.design.fontStyle,
      color: props.design.color,
      backgroundColor: props.design.backgroundColor
    };
  }, [props]);

  useEffect(() => {
    let consoleString = buildConsoleString(
      props.messageType,
      props.consoleMessage,
      props.design
    );
    updateFinalString(consoleString);
  }, [props]);

  function copyDesignToClipBoard() {
    copyToClipboard(finalString);
    console.log(finalString);
  }

  return (
    <div className="design-card">
      <h3>Design Name: {`${props.design.name}`}</h3>
      <p style={styles}>{`${props.consoleMessage}, ${props.variableName}`}</p>
      <button onClick={copyDesignToClipBoard}>Copy</button>
    </div>
  );
}
