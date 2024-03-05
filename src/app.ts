import express, { Application, Request, Response, NextFunction } from 'express';
import * as bodyParser from "body-parser";
import { MoviesLobbyAPIs } from "./apis";
import MongoDB from "./infra/database/mongo-db";
class App {
   public app: Application;
   private movie_lobby_apis: MoviesLobbyAPIs = new MoviesLobbyAPIs();
   private dbConnection: MongoDB = new MongoDB();
   constructor() {
      this.app = express();
      this.config();
      this.movie_lobby_apis.api(this.app);
   }
   private config(): void {
      // application/json type post data
      this.app.use(bodyParser.json());

      // connect mongodb
      this.dbConnection.connect();
   }
}
export default new App().app;