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
const movieService_1 = __importDefault(require("../services/movieService"));
class MovieController {
    static getAllMovies(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const movies = yield movieService_1.default.getAllMovies();
            if (!movies)
                return res.status(500).send("Something Went Wrong :(");
            res.status(200).send(movies);
        });
    }
    static getMovieById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = Number(req.params.id);
            if (!id)
                return res.status(400).send("Id must be a number.");
            const movie = yield movieService_1.default.getMovieById(id);
            if (!movie)
                return res.status(404).send("Not Found :(");
            res.status(200).send(movie);
        });
    }
    static createMovie(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, durationInMinutes, releasedYear } = req.body;
            if (!name || !durationInMinutes || !releasedYear)
                return res
                    .status(400)
                    .send("Bad Request! Missing some required data :(");
            const movieData = {
                name: name,
                durationInMinutes: durationInMinutes,
                releasedYear: releasedYear,
            };
            const newMovie = yield movieService_1.default.createNewMovie(movieData);
            if (!newMovie)
                return res.status(500).send("Something Went Wrong:(");
            res.status(201).send({ msg: "Created :)", data: newMovie });
        });
    }
}
exports.default = MovieController;
