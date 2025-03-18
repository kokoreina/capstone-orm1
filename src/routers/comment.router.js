import express from 'express';
import { commentController } from '../controllers/comment.controller.js';
import { protect } from '../common/middlewares/protect.middlewares.js';

const commentRouter = express.Router();
// lấy thông tin bình luận theo id ảnh
commentRouter.get("/get-comment/:id",protect,commentController.getComment)
// post để lưu thông tin bình luận của người dùng 
commentRouter.post("/post-comment",protect,commentController.postComment)

// Tạo route CRUD
commentRouter.post('/', commentController.create);
commentRouter.get('/', commentController.findAll);
commentRouter.get('/:id', commentController.findOne);
commentRouter.patch('/:id', commentController.update);
commentRouter.delete('/:id', commentController.remove);

export default commentRouter;