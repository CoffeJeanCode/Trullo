import app from "./app";
import { connectToDb } from "./db";

const main = () => {
  connectToDb();
  app.listen(app.get("PORT"));
  console.log("Server listening on", app.get("PORT"));
};

main();
