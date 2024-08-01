import express from "express";
import {ClassBased} from 'outers'
import fs from 'fs';

import {GenerateFullPost} from "./Generator/Generator";

// Import Credentials
import { General } from "./config/credentials";

const ExpressServer = express();

// Initialize the server
const ClusterConfig = new ClassBased.ClusterCreator(ExpressServer, General.PORT);

// Config Cluster
ClusterConfig.ControlTrustProxy(true);
ClusterConfig.SetNumberOfWorkers(1);

// Start the server
ClusterConfig.StartServer();

GenerateFullPost().then((response) => {
    fs.writeFileSync('source/FullPost.json', JSON.stringify(response));
});