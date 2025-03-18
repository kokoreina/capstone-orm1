import express from 'express';
import { userController } from '../controllers/user.controller.js';
import { protect } from '../common/middlewares/protect.middlewares.js';

const userRouter = express.Router();

// Tạo route CRUD
//đăng ký
userRouter.post('/register', userController.register);
// đăng nhập
userRouter.post('/login',userController.login)
// lấy token
userRouter.post('/refresh-token',userController.refreshToken)
// lấy thông tin user
userRouter.get('/get-info/',protect,userController.getInfo)
//update user
userRouter.put("/update-user",protect,userController.updateUser)


userRouter.post('/', userController.create);
userRouter.get('/', userController.findAll);
userRouter.get('/:id', userController.findOne);
userRouter.patch('/:id', userController.update);
userRouter.delete('/:id', userController.remove);

export default userRouter;