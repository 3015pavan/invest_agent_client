// src/api/socket.js
import { io } from "socket.io-client";

// Replace with your backend URL
const SOCKET_URL = "http://localhost:5000";

const socket = io(SOCKET_URL, {
  autoConnect: false, // Prevent auto connection until authenticated
  transports: ["websocket"],
});

export default socket;
