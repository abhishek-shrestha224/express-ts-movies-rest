import { Router } from "express";
import movieController from "../controllers/movieController.js";

const movieRouter = Router();

movieRouter.get("/", movieController.getAllMovies);
movieRouter.get("/:id", movieController.getMovieById);
movieRouter.post("/", movieController.createMovie);
// movieRouter.get("/", ProductController.getAll);
// movieRouter.put("/:id", ProductController.replace);
// movieRouter.patch("/:id", ProductController.update);
// movieRouter.delete("/:id", ProductController.delete);

export default movieRouter;
