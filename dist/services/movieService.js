"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promises_1 = __importDefault(require("fs/promises"));
class MovieService {
    static getAllMovies() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const movies = JSON.parse(yield promises_1.default.readFile("./src/db/movies.json", "utf8"));
                console.log(movies);
                return movies;
            }
            catch (err) {
                console.error("Error reading movies data:", err.message);
                return undefined;
            }
        });
    }
    static getMovieById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const movies = JSON.parse(yield promises_1.default.readFile("./src/db/movies.json", "utf8"));
                const movie = movies.find((movie) => id === movie.id);
                console.log(movie);
                return movie || undefined;
            }
            catch (err) {
                console.error("Error reading movies data:", err.message);
                return undefined;
            }
        });
    }
    static createNewMovie(createData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const movies = JSON.parse(yield promises_1.default.readFile("./src/db/movies.json", "utf8"));
                console.log(movies);
                const newMovie = Object.assign({ id: movies.length + 1 }, createData);
                movies.push(newMovie);
                yield promises_1.default.writeFile("./src/db/movies.json", JSON.stringify(movies, null, 2), "utf8");
                return newMovie;
            }
            catch (err) {
                console.error("Error writing movies data", err.message);
                return undefined;
            }
        });
    }
}
exports.default = MovieService;
