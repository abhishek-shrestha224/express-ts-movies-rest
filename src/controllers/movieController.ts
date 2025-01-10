import { Request, Response } from "express";
import { Movie, MovieCreate } from "../schemas/movieSchema";
import MovieService from "../services/movieService";

class MovieController {
    static async getAllMovies(req: Request, res: Response) {
        const movies: Movie[] | undefined = await MovieService.getAllMovies();
        if (!movies) return res.status(500).send("Something Went Wrong :(");
        res.status(200).send(movies);
    }
    static async getMovieById(req: Request, res: Response) {
        const id = Number(req.params.id);
        if (!id) return res.status(400).send("Id must be a number.");
        const movie = await MovieService.getMovieById(id);
        if (!movie) return res.status(404).send("Not Found :(");
        res.status(200).send(movie);
    }
    // async createMovie(req: Request, res: Response) {
    //     const { name, durationInMinutes, releasedYear } = req.body;
    //     if (!name || !durationInMinutes || !releasedYear)
    //         res.status(400).send("Bad Request! Missing some required data :(");
    //     const movieData: MovieCreate = {
    //         name: name,
    //         durationInMinutes: durationInMinutes,
    //         releasedYear: releasedYear,
    //     };
    //     const newMovie = await MovieService.createNewMovie(movieData);
    //     if (!newMovie) res.status(500).send("Something Went Wrong:(");
    //     res.status(201).send({ msg: "Created :)", data: newMovie });
    // }
}

export default MovieController;
