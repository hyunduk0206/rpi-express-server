import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const port = 28080;
const app = express();
const server = createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*",
    },
});

io.on("connection", (socket) => {
    socket.emit("eventFromDevice", "Hello, World 👋");
    console.log("a device connected");
});

app.get("/", (req, res) => {
    res.send("Socket IO server");
});

server.listen(port, () => {
    console.log(`Socket IO server listening on port ${port}.`);
});
