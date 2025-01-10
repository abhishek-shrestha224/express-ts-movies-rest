import { Router } from "express";

import MovieController from "../controllers/movieController";

const movieRouter = Router();

movieRouter.get("/", MovieController.getAllMovies);
movieRouter.get("/:id", MovieController.getMovieById);
movieRouter.post("/", MovieController.createMovie);
// movieRouter.get("/", ProductController.getAll);
// movieRouter.put("/:id", ProductController.replace);
// movieRouter.patch("/:id", ProductController.update);
// movieRouter.delete("/:id", ProductController.delete);

export default movieRouter;
