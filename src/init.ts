import express, { Application, Request, Response } from "express";
import compression from "compression";
import cors from "cors";
import helmet from "helmet";
import flash from "connect-flash";
import cookieParser from "cookie-parser";

import { environment, port } from "./config";
import appRoutes from "./route-handler";
import createLogger from "./core/Logger";
import { BaseException, NotFoundError, InternalError } from "./core/Exceptions";

const logger = createLogger("init");

process.on("uncaughtException", (e: any) => logger.error(e));

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
    app.use("/", appRoutes);

    /**
     * Error handling
     */
    app.use((req, res) => BaseException.handle(new NotFoundError(), res));
    app.use((err: Error, req: Request, res: Response) => {
      if (err instanceof BaseException) {
        BaseException.handle(err, res);
      } else {
        if (environment === "development") {
          logger.error(err);
          return res.status(500).send(err.message);
        }
        BaseException.handle(new InternalError(), res);
      }
    });

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
