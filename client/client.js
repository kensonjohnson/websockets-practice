import { WebSocket } from "ws";
const ws = new WebSocket("ws://Orpheus:3000");

ws.onopen = () => {
  let message = "Hello from Client!!";
  ws.send(JSON.stringify(message));
};

ws.onmessage = function (e) {
  console.log("Connection Established.");
  let message = JSON.parse(e.data);
  console.log(message);
};

ws.onclose = () => {
  console.log("Connection closed.");
};
