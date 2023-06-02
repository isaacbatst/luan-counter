import dotenv from 'dotenv';

dotenv.config();

export const BOT_TOKEN = process.env.BOT_TOKEN;
export const DB_COLLECTION = process.env.DB_COLLECTION;
export const OPEN_AI_API_KEY = process.env.OPEN_AI_API_KEY