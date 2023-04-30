import { WebSocketServer } from "ws";
const wss = new WebSocketServer({ port: 3000 });

let numberOfRequests = 0;

wss.on("connection", (ws) => {
  console.log("Connection Established.");
  ws.onmessage = (e) => {
    console.log(JSON.parse(e.data));
  };
  console.log("Message sent.");
  numberOfRequests++;
  setTimeout(() => {
    let msg = "This message came from the server.";
    ws.send(JSON.stringify(msg));
    // ws.close()
  }, 500);
});

wss.on("error", console.error);

wss.on("close", () => {
  console.log("Server shutting down.");
});

const timer = setInterval(() => {
  if (numberOfRequests > 4) {
    wss.close();
    clearInterval(timer);
  }
}, 100);
