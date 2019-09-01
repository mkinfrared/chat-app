import cors from "cors";
import connectRedis from "connect-redis";
import express from "express";
import session from "express-session";

import {
  FRONTEND_HOST,
  NODE_ENV,
  REDIS_HOST,
  SERVER_PORT,
  SESSION_SECRET
} from "@util/secrets";

const startServer = async () => {
  const RedisStore = connectRedis(session);
  const app = express();

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

  const server = app.listen(SERVER_PORT, () => {
    console.log(`Server is running on port ${SERVER_PORT}`);
  });

  return server;
};

export default startServer;
