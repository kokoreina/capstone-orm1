import express from 'express';
import { imageController } from '../controllers/image.controller.js';
import { protect } from '../common/middlewares/protect.middlewares.js';

const imageRouter = express.Router();

// Tạo route CRUD
// get danh sách ảnh về
imageRouter.get("/get-image",protect,imageController.getImage)
// get tìm kiếm danh sách ảnh theo tên
imageRouter.get("/get-name-image/:ten_hinh",protect,imageController.getNameImage)
// get thông tin ảnh và người tạo ảnh = id ảnh
imageRouter.get("/get-information-image/:id",protect,imageController.getInformationImage)
// get danh sách ảnh đã taọ theo userid
imageRouter.get("/get-listImage/:id",protect,imageController.getListImage)
// xoá ảnh đã tạo theo id ảnh 
imageRouter.delete("/delete-image/:id",protect,imageController.deleteImage)
// post thêm một ảnh của user
imageRouter.post("/post-image",protect,imageController.postImage)



imageRouter.post('/', imageController.create);
imageRouter.get('/', imageController.findAll);
imageRouter.get('/:id', imageController.findOne);
imageRouter.patch('/:id', imageController.update);
imageRouter.delete('/:id', imageController.remove);

export default imageRouter;