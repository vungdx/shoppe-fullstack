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
