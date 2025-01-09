import express, { Request, Response } from "express";
import movieRouter from "./routers/movieRouter.js";

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use("/api/movies/", movieRouter);
// app.use(express.static("./src/public/"));

app.get("/", (req: Request, res: Response) => {
  if (!req.query) res.json({ Hello: "World" });
  res.json({ Hello: "World", fName: req.query.fName });
});

app.listen(PORT, () => {
  console.log(`Server running on port http://127.0.0.1:${PORT}`);
});
