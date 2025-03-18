import { BadRequestException } from "../common/helpers/error.helper.js";
import prisma from "../common/prisma/init.prisma.js";

export const saveImageService = {
   create: async function (req) {
      return `This action create`;
   },

   findAll: async function (req) {
      return `This action returns all saveImage`;
   },

   findOne: async function (req) {
      return `This action returns a id: ${req.params.id} saveImage`;
   },

   update: async function (req) {
      return `This action updates a id: ${req.params.id} saveImage`;
   },

   remove: async function (req) {
      return `This action removes a id: ${req.params.id} saveImage`;
   },
   getSaveImage : async(req)=>{
      const {id}=req.params
      if(!id){
         throw new BadRequestException("Vui lòng cung cấp id hình ảnh")
      }
      const saveImage= await prisma.luu_anh.findFirst({
         where:{
            hinh_id:Number(id)
         }
      })
      if(saveImage===null){
         throw new BadRequestException("Hình ảnh này chưa được lưu")
      }
      return saveImage
   },
   getListSaveImage : async(req)=>{
      const {id}=req.params
      if(!id){
         throw new BadRequestException("Vui lòng cung cấp id người dùng")
      }
      const listSaveImage= await prisma.luu_anh.findMany({
         where:{
            nguoi_dung_id:Number(id)
         }
      })
      return listSaveImage
   }
};