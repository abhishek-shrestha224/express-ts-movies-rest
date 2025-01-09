import express from "express";
import { getAllMovies } from "./services/movieService";
const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());
// app.use(express.static("./src/public/"));
app.get("/", (req, res) => {
    if (!req.query)
        res.json({ Hello: "World" });
    res.json({ Hello: "World", fName: req.query.fName });
});
app.get("/movies", async (req, res) => {
    try {
        const movies = await getAllMovies();
        res.status(200).send(movies);
    }
    catch (err) {
        res.status(400).send("Something Went Wrong :(");
    }
});
app.listen(PORT, () => {
    console.log(`Server running on port http://127.0.0.1:${PORT}`);
});
