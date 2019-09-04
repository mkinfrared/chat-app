import { Socket } from "socket.io";

const manager = (socket: Socket) => {
  console.log("User connected");
};

export default manager;
