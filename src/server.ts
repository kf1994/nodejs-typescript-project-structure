#!/usr/bin/env ts-node

import * as dotenv from "dotenv";
import init from "./init";

dotenv.config();

const server = () => {
    init();
}

server();
