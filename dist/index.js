"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const movieRouter_1 = __importDefault(require("./routers/movieRouter"));
const PORT = process.env.PORT || 5000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api/movies/", movieRouter_1.default);
app.get("/", (req, res) => {
    res.send("Namaste, Server is working fine 😉");
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
