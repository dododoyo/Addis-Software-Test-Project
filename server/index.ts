import "express-async-errors";
import express, { Express } from "express";
import morgan from "morgan";
import { connect, connection } from "mongoose";
import cors from "cors";

import { songRouter } from "./routes/songRouter";
import { errorHandlerMiddleware } from "./middleware/errorHandlerMiddleware";
import config from "./core/app.config";
import corsOptions from "./core/cors";

const app: Express = express();

if (config.nodeEnv === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.use(cors(corsOptions));

app.use("/api/v1/song", songRouter);

app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});

app.use(errorHandlerMiddleware);
const port = process.env.PORT || 8080;

async function main() {
  connect(config.mongoose.uri, config.mongoose.options);
  connection.on("connected", () => {
    console.log(`Database Connected`);
  });

  app.listen(port, () => {
    return console.log(`server running on port ${port} . . .`);
  });
}

main();
