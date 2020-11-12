import mongoose from "mongoose";

const URI = process.env.DB_URI || "mongodb://localhost/trullo-db";

export const connectToDb = async (): Promise<void> => {
  try {
    await mongoose.connect(URI, {
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    console.log("DB is connected");
  } catch (e) {
    console.error(e);
  }
};
