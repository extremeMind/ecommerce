import express from 'express';
import User from '../model/userModel';

const userRouter = express.Router();

userRouter.get("/createadmin", async(req, res) => {
    try {
        const user = new User({
            name: 'admin',
            email: 'admin@example.com',
            password: 'jsamazona',
            isAdmin: true
        });
        const createdUser = await user.save();
        console.log(user);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

export default userRouter;