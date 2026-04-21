import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
    
    try {
        const token = req.headers.authorization;

        if(!token){
            return res.status(401).json({msg: 'No hay Token'});
        }

        const tokenClean = token.split(' ')[1];

        const decoded = jwt.verify(tokenClean, process.env.JWT_SECRET);

        req.user = decoded;

        next();

    }catch(error){
        return res.status(401),json({msg: 'Token Invalido'});
    }
};

export default authMiddleware