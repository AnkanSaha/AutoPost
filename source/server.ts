import express from "express";
import {ClassBased} from 'outers'

// Import Credentials
import { General } from "./config/credentials";

const ExpressServer = express();

// Initialize the server
const ClusterConfig = new ClassBased.ClusterCreator(ExpressServer, General.PORT);

// Config Cluster
ClusterConfig.ControlTrustProxy(true);
ClusterConfig.SetNumberOfWorkers(2);

// Start the server
ClusterConfig.StartServer();