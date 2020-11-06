import * as mongoose from "mongoose";

const URI = process.env.DB_URI || "mongodb://localhost/trullo-db";

export const connectToDb = async () => {
  try {
    await mongoose.connect(URI, {
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB is connected");
  } catch (e) {
    console.error(e);
  }
};
