/* eslint-disable @typescript-eslint/no-explicit-any */
import express from "express";
import {ClassBased} from 'outers'

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

GenerateFullPost().then((response: any) => {
   console.log("Full Post Response: ", response)
});