import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from "jsonwebtoken";

const auth = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).send({ message: 'Empty authentication header!' })
    }

    const token = authHeader.split(' ')[1];

    jwt.verify(token, process.env.PRIVATE_KEY, (error, credentials: JwtPayload) => {
        if (error) return res.status(403).send({ error: 'Authentication error' });

        req.user = credentials.user;
        next();
    });
}

export default auth;