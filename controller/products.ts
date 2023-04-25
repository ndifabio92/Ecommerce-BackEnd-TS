import { Request, Response } from "express";

export const getProducts = async (req: Request, res: Response) => {
    try {
        res.send("hola")
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};