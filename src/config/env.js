import { config } from 'dotenv';

config();

export const PORT = process.env.PORT;
export const MONGODB_URL = process.env.MONGODB_URL;
export const JWT_PRIVATE_KEY = process.env.JWT_PRIVATE_KEY;
