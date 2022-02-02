import mongoose from "mongoose";

import { mongodbURI } from "./";
import createLogger from "../core/Logger";

const logger = createLogger("config/db");

mongoose.connect(mongodbURI)
	.then(() => logger.info("MongoDB :: connected"))
	.catch((err) => console.error(`MongoDB :: connection ${err}`));