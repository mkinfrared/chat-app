import dotenv from "dotenv";

dotenv.config();

console.log(process.env.NODE_ENV);

const SERVER_PORT = process.env.SERVER_PORT as string;
const SERVER_ADDRESS = process.env.SERVER_ADDRESS as string;
const SERVER_HOST = `${SERVER_ADDRESS}:${SERVER_PORT}`;
const EMAIL_USERNAME = process.env.EMAIL_USERNAME as string;
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD as string;
const NODE_ENV = process.env.NODE_ENV as string;
const COMPANY_NAME = process.env.COMPANY_NAME as string;
const COMPANY_EMAIL = process.env.COMPANY_EMAIL as string;
const SESSION_SECRET = process.env.SESSION_SECRET as string;
const FRONTEND_HOST = process.env.FRONTEND_HOST as string;
const REDIS_HOST = process.env.REDIS_HOST as string;
const DB_HOST = process.env.DB_HOST as string;
const DB_USERNAME = process.env.DB_USERNAME as string;
const DB_PASSWORD = process.env.DB_PASSWORD as string;
const DB_NAME = process.env.DB_NAME as string;

export {
  SERVER_PORT,
  SERVER_ADDRESS,
  SERVER_HOST,
  EMAIL_USERNAME,
  EMAIL_PASSWORD,
  NODE_ENV,
  COMPANY_NAME,
  COMPANY_EMAIL,
  SESSION_SECRET,
  FRONTEND_HOST,
  REDIS_HOST,
  DB_HOST,
  DB_NAME,
  DB_PASSWORD,
  DB_USERNAME
};
