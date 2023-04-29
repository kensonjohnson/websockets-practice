import { WebSocketServer } from "ws";
const ws = new WebSocketServer({ port: 3000 });

ws.on("connection", (ws) => {
  console.log("Connection Established.");
  let msg = "This message came from the server.";
  ws.send(JSON.stringify(msg));
  console.log("Message sent. Shutting down...");
  process.exit();
});
