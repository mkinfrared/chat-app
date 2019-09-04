/* istanbul ignore file */

import { createConnection } from "typeorm";

import {
  DB_HOST,
  DB_NAME,
  DB_PASSWORD,
  DB_USERNAME,
  NODE_ENV
} from "@utils/secrets";

export default async () => {
  if (NODE_ENV === "production") {
    const connection = await createConnection({
      name: "default",
      type: "postgres",
      host: DB_HOST,
      port: 5432,
      username: DB_USERNAME,
      password: DB_PASSWORD,
      database: DB_NAME,
      synchronize: true,
      logging: false,
      dropSchema: true,
      entities: ["src/db/entity/**/*.js"],
      migrations: ["src/db/migration/**/*.js"],
      subscribers: ["src/db/subscriber/**/*.js"],
      cli: {
        entitiesDir: "src/db/entity",
        migrationsDir: "src/db/migration",
        subscribersDir: "src/db/subscriber"
      }
    });

    return connection;
  }

  const connection = await createConnection();

  return connection;
};
