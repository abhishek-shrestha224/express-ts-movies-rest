import { Request, Response } from "express";
import { Movie, MovieCreate } from "../schemas/movieSchema.js";
import movieService from "../services/movieService.js";

const movieController = {
    async getAllMovies(req: Request, res: Response) {
        const movies: Movie[] | undefined = await movieService.getAllMovies();
        if (!movies) res.status(500).send("Something Went Wrong :(");
        res.status(200).send(movies);
    },

    async getMovieById(req: Request, res: Response) {
        const id = Number(req.params.id);
        if (!id) res.status(400).send("Id must be a number.");

        const movie = await movieService.getMovieById(Number(id));
        if (!movie) res.status(404).send("Not Found :(");
        res.status(200).send(movie);
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

        const newMovie = movieService.createNewMovie(movieData);
        if (!newMovie) res.status(500).send("Something Went Wrong:(");

        res.status(201).send({ msg: "Created :)", data: newMovie });
    },
};

export default movieController;
