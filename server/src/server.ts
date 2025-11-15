import express, { NextFunction, Request, Response } from 'express';
import cors from "cors";
import {env} from "./utils/env"
import boardsRouter from './routers/boards';
const port = Number(env('PORT', 3000))

export const setupServer = () => {
    const app = express();
    app.use(cors());
      app.use(express.json());
    app.use("/boards", boardsRouter);

    app.use((req, res) => res.status(404).json({
        message: `${req.url} not found`
    }))
    app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
        res.status(500).json({
            message: error.message
        })
    })
    app.listen(port, () => console.log(`Server running on port ${port}`))
}