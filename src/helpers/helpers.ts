import { Design, MessageType } from "../types/types";

export function copyToClipboard(data: string) {
  var input = document.createElement("input");
  input.setAttribute("value", data);
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.body.removeChild(input);
}

export function buildConsoleString(
  messageType: MessageType,
  consoleMessage: string,
  design: Design
) {
  return (
    "console." +
    messageType +
    "('%c" +
    consoleMessage +
    "', 'font-style: " +
    design.fontStyle +
    "; " +
    "font-family: " +
    design.fontFamily +
    "; " +
    "font-size: " +
    design.fontSize +
    "; " +
    "color: " +
    design.color +
    "; " +
    "background-color: " +
    design.backgroundColor +
    ";" +
    "')"
  );
}
