import { responseSuccess } from "../common/helpers/respone,helper.js";
import { commentService } from "../service/comment.service.js";

export const commentController = {
  create: async function (req, res, next) {
    try {
      const result = await commentService.create(req);
      const response = responseSuccess(result, `Create comment successfully`);
      res.status(response.code).json(response);
    } catch (err) {
      next(err);
    }
  },

  findAll: async function (req, res, next) {
    try {
      const result = await commentService.findAll(req);
      const response = responseSuccess(result, `Get all comments successfully`);
      res.status(response.code).json(response);
    } catch (err) {
      next(err);
    }
  },

  findOne: async function (req, res, next) {
    try {
      const result = await commentService.findOne(req);
      const response = responseSuccess(
        result,
        `Get comment #${req.params.id} successfully`
      );
      res.status(response.code).json(response);
    } catch (err) {
      next(err);
    }
  },

  update: async function (req, res, next) {
    try {
      const result = await commentService.update(req);
      const response = responseSuccess(
        result,
        `Update comment #${req.params.id} successfully`
      );
      res.status(response.code).json(response);
    } catch (err) {
      next(err);
    }
  },

  remove: async function (req, res, next) {
    try {
      const result = await commentService.remove(req);
      const response = responseSuccess(
        result,
        `Remove comment #${req.params.id} successfully`
      );
      res.status(response.code).json(response);
    } catch (err) {
      next(err);
    }
  },
  getComment: async function (req, res, next) {
    try {
      const result = await commentService.getComment(req);
      const response = responseSuccess(
        result,
        `Get comment successfully`
      );
      res.status(response.code).json(response);
    } catch (err) {
      next(err);
    }
  },
  postComment: async function (req, res, next) {
    try {
      const result = await commentService.postComment(req);
      const response = responseSuccess(
        result,
        `Post comment successfully`
      );
      res.status(response.code).json(response);
    } catch (err) {
      next(err);
    }
  },

};
