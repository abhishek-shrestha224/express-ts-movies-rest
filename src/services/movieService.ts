import fs from "fs/promises";
import { Movie, MovieCreate } from "../schemas/movieSchema.js";

const movieService = {
    async getAllMovies(): Promise<Movie[] | undefined> {
        try {
            const movies: Movie[] = JSON.parse(
                await fs.readFile("./src/db/movies.json", "utf8")
            );
            console.log(movies);
            return movies;
        } catch (err) {
            console.error("Error reading movies data:", (err as Error).message);
            return undefined;
        }
    },

    async getMovieById(id: number): Promise<Movie | undefined> {
        try {
            const movies: Movie[] = JSON.parse(
                await fs.readFile("./src/db/movies.json", "utf8")
            );
            console.log(movies);
            return movies.find((movie) => id === movie.id);
        } catch (err) {
            console.error("Error reading movies data:", (err as Error).message);
            return undefined;
        }
    },
    async createNewMovie(createData: MovieCreate): Promise<Movie | undefined> {
        try {
            const movies: Movie[] = JSON.parse(
                await fs.readFile("./src/db/movies.json", "utf8")
            );
            console.log(movies);

            const newMovie: Movie = {
                id: movies.length + 1,
                ...createData,
            };
            movies.push(newMovie);
            return newMovie;
        } catch (err) {
            console.error("Error writing movies data", (err as Error).message);
            return undefined;
        }
    },
};

export default movieService;
