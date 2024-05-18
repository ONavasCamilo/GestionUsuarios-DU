import { JWT_PRIVATE_KEY } from '#Config/env.js';
import { jwtVerify } from 'jose';

const userJWTDTO = async (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) return res.status(401).send('Usuario no autorizado');

    try {
        const encoder = new TextEncoder();
        const { payload } = await jwtVerify(
            authorization.split(' ')[1],
            encoder.encode(JWT_PRIVATE_KEY)
        );
        req.id = payload.id;
        next();
    } catch (err) {
        res.status(401).send('Usuario no autorizado');
    }
};

export default userJWTDTO;
