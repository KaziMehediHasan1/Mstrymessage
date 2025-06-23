import { config } from "@/config";
import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

const dbConnect = async (): Promise<void> => {
  if (connection.isConnected) {
    console.log("Already connected to database");
    return;
  }
  try {
    const db = await mongoose.connect((config.dbURL as string) || "");
    console.log("connection read", db.connections);
    connection.isConnected = db.connections[0].readyState;
    console.log(db, "DB connected successfully");
  } catch (error) {
    console.log("DB connection fail", error);
    process.exit(1);
  }
};

export default dbConnect;
