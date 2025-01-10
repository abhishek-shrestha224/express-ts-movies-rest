import { Request, Response } from "express";
import { Movie } from "../schemas/movieSchema.js";
import movieService from "../services/movieService.js";

const movieController = {
    async getAllMovies(req: Request, res: Response) {
        try {
            const movies: Movie[] = await movieService.getAllMovies();
            res.status(200).send(movies);
        } catch (err) {
            res.status(400).send("Something Went Wrong :(");
        }
    },

    async getMovieById(req: Request, res: Response) {
        try {
            const movies = await movieService.getMovieById(
                Number(req.params.id)
            );
            res.status(200).send(movies);
        } catch (err) {
            res.status(400).send("Something Went Wrong :(");
        }
    },
};

export default movieController;
