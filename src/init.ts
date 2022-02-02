import express, { Application } from "express";
import compression from "compression";
import cors from "cors";
import helmet from "helmet";
import flash from "connect-flash";
import cookieParser from "cookie-parser";

import { port } from "./config";
import appRoutes from "./route-handler";
import createLogger from "./core/Logger";
import { NotFoundError } from "./core/Exceptions";
import globalErrorHandler from "./common/middlewares/global-error-handler";
import './config/db';

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
		app.use((req, res, next) => next(new NotFoundError()));
		app.use(globalErrorHandler);

		/**
		 * starting server
		 */
		app.listen(port)
			.on("error", (error: any) => logger.error(error))
			.on("listening", () => logger.info(`Express listening on ${port}`));
	} catch (err) {
		logger.error("Error initializing server!", err);
	}
};

export default init;
