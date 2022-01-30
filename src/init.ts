import express, { Application, Request, Response } from "express";
import compression from "compression";
import cors from "cors";
import helmet from "helmet";
import flash from "connect-flash";
import cookieParser from "cookie-parser";

import {port} from "./config";
import createLogger from "./core/Logger";

const logger = createLogger("init");

process.on("uncaughtException", (e: any) => {
  logger.error(e);
});

const init = () => {
  try {
    /**
     * Initializing express
     */
    const app: Application = express();

    /**
     * Static routes
     */
    app.use("/images", express.static("images"));

    /**
     * Basic Configurations
     */
    app.use(compression());
    app.use(express.json({ limit: "50mb" }));
    app.use(express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 100000 }));
    app.use(cookieParser());
    app.use(helmet());
    app.use(flash());

    /**
     * Adding CORS middleware
     */
    app.use(cors());

    /**
     * Attaching routes to server
     */
    app.get("/", (req: Request, res: Response) => res.status(200).send("Hello World!"));

    /**
     * starting server
     */
    app.listen(port)
        .on("error", (error: any) => logger.error(error))
        .on("listening", () => logger.info(`Express listening on ${port}`));
  } catch (error) {
    logger.error("Error in initializing", error);
  }
};

export default init;
