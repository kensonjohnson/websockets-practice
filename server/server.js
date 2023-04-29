import { WebSocket } from "ws";
const wss = new WebSocket("ws://Orpheus:3000");

wss.onmessage = function (e) {
  console.log("Connection Established.");
  let message = JSON.parse(e.data);
  console.log(message);
};
