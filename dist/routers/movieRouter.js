"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const movieController_1 = __importDefault(require("../controllers/movieController"));
const movieRouter = (0, express_1.Router)();
movieRouter.get("/", movieController_1.default.getAllMovies);
movieRouter.get("/:id", movieController_1.default.getMovieById);
movieRouter.post("/", movieController_1.default.createMovie);
// movieRouter.get("/", ProductController.getAll);
// movieRouter.put("/:id", ProductController.replace);
// movieRouter.patch("/:id", ProductController.update);
// movieRouter.delete("/:id", ProductController.delete);
exports.default = movieRouter;
