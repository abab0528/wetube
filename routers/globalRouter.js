import express from "express";
import routes from "../routes";

const globalRouter = express.Router();
globalRouter.get(routes.home, home);
globalRouter.get(routes.search, Search);
globalRouter.get(routes.join, join);
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);
export default globalRouter;
