import express from 'express';
import cors from "cors";
import {env} from "./utils/env"
const port = Number(env('PORT', 3000))

export const setupServer = () => {
    const app = express();
    app.use(cors());
    app.listen(port, () => console.log(`Server running on port ${port}`))
}