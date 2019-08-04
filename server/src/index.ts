import dotEnv from "dotenv";
dotEnv.config();

import io from "socket.io";
import Express from "express";
import http from "http";

import bodyParser from "body-parser";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import morganBody from "morgan-body";
import { router } from "@config/Routes";
import { ENVIRONMENT } from "@config/Environment";

const app = Express();
const server = http.createServer(app);
const socketIO = io(server);

socketIO.on("connection", function connection(_socket) {
  // tslint:disable-next-line:no-console
  console.log("a user connected", _socket.id);
});

const PORT = process.env.HTTP_PORT || 3001;

app.use(morgan("combined"));
if (ENVIRONMENT.env === "development") {
  morganBody(app);
}

app.use(helmet());
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(bodyParser.json());

// Setup CORS
const originsWhitelist = [
  "localhost:3000",
];
const corsOptions: cors.CorsOptions = {
  origin: (origin, callback) => {
    callback(null, originsWhitelist.includes(origin!));
  },
};
app.use(cors(corsOptions));

app.use("/", router);
server.listen(PORT, () => {
  // tslint:disable-next-line:no-console
  console.log(`App listening on port ${PORT}! 🚀`);
});
