import config from "./config";

export const generateToken = (user) => {
    var jwt = require('jsonwebtoken');
    return jwt.sign({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        },
        config.JWT_SECRET
    );
};