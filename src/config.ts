import path from "path";
import dotenv from "dotenv";
dotenv.config({ path: path.join(process.cwd(), ".env") });

export const config = {
  dbURL: process.env.MONGODB_URI,
  resend: process.env.RESEND_APIKEY,
  nextSecret: process.env.NEXTAUTH_SECRET,
};
