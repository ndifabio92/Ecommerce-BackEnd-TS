import { Request, Response } from "express";
import { createHash } from "../helpers/jwtValidate.js";
import UserManager from "../manager/userManager.js";


export const postUser = async (req: Request, res: Response) => {
    try {
        const { body } = req;
        const manager = new UserManager();

        const dto = {
            ...body,
            password: await createHash(body.password)
        }
        const user = await manager.create(dto);
        res.send({ status: "sucess", msg: "Usuario creado", user });

    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}