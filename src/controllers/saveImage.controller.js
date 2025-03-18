import { responseSuccess } from "../common/helpers/respone,helper.js";
import { saveImageService } from "../service/saveImage.service.js";

export const saveImageController = {
   create: async function (req, res, next) {
      try {
         const result = await saveImageService.create(req);
         const response = responseSuccess(result, `Create saveImage successfully`);
         res.status(response.code).json(response);
      } catch (err) {
         next(err);
      }
   },

   findAll: async function (req, res, next) {
      try {
         const result = await saveImageService.findAll(req);
         const response = responseSuccess(result, `Get all saveImages successfully`);
         res.status(response.code).json(response);
      } catch (err) {
         next(err);
      }
   },

   findOne: async function (req, res, next) {
      try {
         const result = await saveImageService.findOne(req);
         const response = responseSuccess(result, `Get saveImage #${req.params.id} successfully`);
         res.status(response.code).json(response);
      } catch (err) {
         next(err);
      }
   },

   update: async function (req, res, next) {
      try {
         const result = await saveImageService.update(req);
         const response = responseSuccess(result, `Update saveImage #${req.params.id} successfully`);
         res.status(response.code).json(response);
      } catch (err) {
         next(err);
      }
   },

   remove: async function (req, res, next) {
      try {
         const result = await saveImageService.remove(req);
         const response = responseSuccess(result, `Remove saveImage #${req.params.id} successfully`);
         res.status(response.code).json(response);
      } catch (err) {
         next(err);
      }
   },
   getSaveImage: async function (req, res, next) {
      try {
         const result = await saveImageService.getSaveImage(req);
         const response = responseSuccess(result, `get saveImage successfully`);
         res.status(response.code).json(response);
      } catch (err) {
         next(err);
      }
   },
   getListSaveImage: async function (req, res, next) {
      try {
         const result = await saveImageService.getListSaveImage(req);
         const response = responseSuccess(result, `get list saveImage successfully`);
         res.status(response.code).json(response);
      } catch (err) {
         next(err);
      }
   },
};