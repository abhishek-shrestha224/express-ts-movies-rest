import express, { Request, Response } from "express";
import movieRouter from "./routers/movieRouter";

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use("/api/movies/", movieRouter);

app.get("/", (req: Request, res: Response) => {
    res.send("Namaste, Server is working fine 😉");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
