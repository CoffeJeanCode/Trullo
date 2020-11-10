import { Schema, model, Document } from "mongoose";

interface BoardSchema extends Document {
  name: string;
  users: string[];
}

const boardSchema = new Schema({
  name: { type: String, default: "None" },
  users: { type: Array, default: [] },
});

export default model<BoardSchema>("Board", boardSchema);
