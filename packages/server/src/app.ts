import http from "http";
import path from "path";

import bodyParser from "body-parser";
import cors from "cors";
import connectRedis from "connect-redis";
import express from "express";
import session from "express-session";
import io from "socket.io";

import manager from "@sockets/manager";
import routes from "@routes/index";
import {
  FRONTEND_HOST,
  NODE_ENV,
  REDIS_HOST,
  SERVER_PORT,
  SESSION_SECRET
} from "@utils/secrets";

const app = express();
const server = http.createServer(app);
const ws = io(server);

const startServer = async () => {
  const RedisStore = connectRedis(session);

  app.use(express.static(path.resolve(__dirname, "../../web/build/")));

  app.use(
    cors({
      origin: FRONTEND_HOST,
      credentials: true
    })
  );

  app.use(
    session({
      name: "qid",
      secret: SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: NODE_ENV === "production",
        maxAge: 1000 * 60 * 60 * 24 * 7 // 7 days
      },
      store: new RedisStore({
        host: REDIS_HOST
      })
    })
  );

  app.use(bodyParser.json());

  app.use(routes);

  ws.on("connection", manager);

  server.listen(SERVER_PORT, () => {
    console.log(`Server is running on port ${SERVER_PORT}`);
  });

  return server;
};

export default startServer;

export { app, ws };
