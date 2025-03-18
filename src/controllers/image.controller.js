import { responseSuccess } from "../common/helpers/respone,helper.js";
import { imageService } from "../service/image.service.js";

export const imageController = {
   create: async function (req, res, next) {
      try {
         const result = await imageService.create(req);
         const response = responseSuccess(result, `Create image successfully`);
         res.status(response.code).json(response);
      } catch (err) {
         next(err);
      }
   },

   findAll: async function (req, res, next) {
      try {
         const result = await imageService.findAll(req);
         const response = responseSuccess(result, `Get all images successfully`);
         res.status(response.code).json(response);
      } catch (err) {
         next(err);
      }
   },

   findOne: async function (req, res, next) {
      try {
         const result = await imageService.findOne(req);
         const response = responseSuccess(result, `Get image #${req.params.id} successfully`);
         res.status(response.code).json(response);
      } catch (err) {
         next(err);
      }
   },

   update: async function (req, res, next) {
      try {
         const result = await imageService.update(req);
         const response = responseSuccess(result, `Update image #${req.params.id} successfully`);
         res.status(response.code).json(response);
      } catch (err) {
         next(err);
      }
   },

   remove: async function (req, res, next) {
      try {
         const result = await imageService.remove(req);
         const response = responseSuccess(result, `Remove image #${req.params.id} successfully`);
         res.status(response.code).json(response);
      } catch (err) {
         next(err);
      }
   },
   getImage: async function (req, res, next) {
      try {
         const result = await imageService.getImage(req);
         const response = responseSuccess(result, `Get image successfully`,200);
         res.status(response.code).json(response);
      } catch (err) {
         next(err);
      }
   },
   getNameImage: async function (req, res, next) {
      try {
         const result = await imageService.getNameImage(req);
         const response = responseSuccess(result, `Get name image successfully`,200);
         res.status(response.code).json(response);
      } catch (err) {
         next(err);
      }
   },
   getInformationImage: async function (req, res, next) {
      try {
         const result = await imageService.getInformationImage(req);
         const response = responseSuccess(result, `Get information image successfully`,200);
         res.status(response.code).json(response);
      } catch (err) {
         next(err);
      }
   },
   getListImage: async function (req, res, next) {
      try {
         const result = await imageService.getListImage(req);
         const response = responseSuccess(result, `Get list image successfully`,200);
         res.status(response.code).json(response);
      } catch (err) {
         next(err);
      }
   },
   deleteImage: async function (req, res, next) {
      try {
         const result = await imageService.deleteImage(req);
         const response = responseSuccess(result, `Delete image successfully`,200);
         res.status(response.code).json(response);
      } catch (err) {
         next(err);
      }
   },
   postImage: async function (req, res, next) {
      try {
         const result = await imageService.postImage(req);
         const response = responseSuccess(result, `Post image successfully`,200);
         res.status(response.code).json(response);
      } catch (err) {
         next(err);
      }
   },
};