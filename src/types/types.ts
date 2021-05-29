export interface Design {
  name: string;
  fontStyle: string;
  fontSize: string;
  fontFamily: string;
  color: string;
  backgroundColor: string;
}

export type MessageType = "log" | "warn" | "info" | "error";
