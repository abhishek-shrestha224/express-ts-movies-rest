import fs from "fs/promises";
import path from "path";
export async function getAllMovies() {
    try {
        const filePath = path.resolve(__dirname, "../db/movies.json");
        const data = JSON.parse(await fs.readFile(filePath, "utf8"));
        return data;
    }
    catch (err) {
        console.error("Error reading movies data:", err.message);
        throw new Error(`Failed to fetch movies: ${err.message}`);
    }
}
