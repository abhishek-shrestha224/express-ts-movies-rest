import { Request, Response } from "express";
import { Movie, MovieCreate } from "../schemas/movieSchema.js";
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
        } catch (_) {
            res.status(400).send("Something Went Wrong :(");
        }
    },
    async createMovie(req: Request, res: Response) {
        const { name, durationInMinutes, releasedYear } = req.body;
        if (!name || !durationInMinutes || !releasedYear)
            res.status(400).send("Bad Request! Missing some required data :(");
        const movieData: MovieCreate = {
            name: name,
            durationInMinutes: durationInMinutes,
            releasedYear: releasedYear,
        };
        try {
            const newMovie = movieService.createNewMovie(movieData);
            res.status(201).send({ msg: "Created :)", data: newMovie });
        } catch (_) {
            res.status(500).send("Something Went Wrong:(");
        }
    },
};

export default movieController;
