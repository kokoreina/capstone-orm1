import express from 'express';
import { saveImageController } from '../controllers/saveImage.controller.js';
import { protect } from '../common/middlewares/protect.middlewares.js';

const saveImageRouter = express.Router();
// get thông tin đã lưu hình này chưa theo id ảnh
saveImageRouter.get("/get-save-image/:id",protect,saveImageController.getSaveImage)
// get danh sách ảnh đã lưu theo user id 
saveImageRouter.get("/getListSaveImage/:id",protect,saveImageController.getListSaveImage)
// Tạo route CRUD
saveImageRouter.post('/', saveImageController.create);
saveImageRouter.get('/', saveImageController.findAll);
saveImageRouter.get('/:id', saveImageController.findOne);
saveImageRouter.patch('/:id', saveImageController.update);
saveImageRouter.delete('/:id', saveImageController.remove);

export default saveImageRouter;