import fs from "fs/promises";
import { Movie, MovieCreate } from "../schemas/movieSchema";

class MovieService {
    static async getAllMovies(): Promise<Movie[] | undefined> {
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
    }

    static async getMovieById(id: number): Promise<Movie | undefined> {
        try {
            const movies: Movie[] = JSON.parse(
                await fs.readFile("./src/db/movies.json", "utf8")
            );
            const movie = movies.find((movie) => id === movie.id);
            console.log(movie);
            return movie || undefined;
        } catch (err) {
            console.error("Error reading movies data:", (err as Error).message);
            return undefined;
        }
    }
    static async createNewMovie(
        createData: MovieCreate
    ): Promise<Movie | undefined> {
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

            await fs.writeFile(
                "./src/db/movies.json",
                JSON.stringify(movies, null, 2),
                "utf8"
            );
            return newMovie;
        } catch (err) {
            console.error("Error writing movies data", (err as Error).message);
            return undefined;
        }
    }
}

export default MovieService;
