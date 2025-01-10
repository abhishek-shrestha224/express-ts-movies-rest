import fs from "fs/promises";
import { Movie, MovieCreate } from "../schemas/movieSchema.js";

const movieService = {
    async getAllMovies(): Promise<Movie[]> {
        try {
            const movies: Movie[] = JSON.parse(
                await fs.readFile("./src/db/movies.json", "utf8")
            );
            console.log(movies);
            return movies;
        } catch (err) {
            console.error("Error reading movies data:", (err as Error).message);
            throw new Error(
                `Failed to fetch movies: ${(err as Error).message}`
            );
        }
    },

    async getMovieById(id: number): Promise<Movie> {
        try {
            const movies: Movie[] = JSON.parse(
                await fs.readFile("./src/db/movies.json", "utf8")
            );
            console.log(movies);
            const result = movies.find((movie) => id === movie.id);
            if (!result) {
                throw new Error("Not Found :(");
            }
            return result;
        } catch (err) {
            console.error("Error reading movies data:", (err as Error).message);
            throw new Error(
                `Failed to fetch movies: ${(err as Error).message}`
            );
        }
    },
    async createNewMovie(createData: MovieCreate): Promise<Movie> {
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
            throw new Error(
                `Failed to fetch movies: ${(err as Error).message}`
            );
        }
    },
};

export default movieService;
