import jwt from 'jsonwebtoken';
import config from './config';

export const getToken = (user) => {
    return jwt.sign({
        id: user.id,
        name: user.name,
        isAdmin: user.isAdmin,
        email: user.email
    }, config.JWT_SECRET, {
        expiresIn: '48h'
    })
}

export const isAuth = (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
        const onlyToken = token.slice(7, token.length)
        jwt.verify(onlyToken, config.JWT_SECRET, (err, decode) => {
            if (err) {
                return res.status(401).send({ msg: 'Invalid Token' })
            }
            req.user = decode;
            next();
            return;
        });
    } else {
        return res.status(401).send({ msg: "Token is not supplied" })
    }
}

export const isAdmin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
        return next();
    } else {
        return res.status(401).send({ msg: "Admin Token is not valid" })
    }
}
