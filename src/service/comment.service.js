import { BadRequestException } from "../common/helpers/error.helper.js";
import prisma from "../common/prisma/init.prisma.js";

export const commentService = {
   create: async function (req) {
      return `This action create`;
   },

   findAll: async function (req) {
      return `This action returns all comment`;
   },

   findOne: async function (req) {
      return `This action returns a id: ${req.params.id} comment`;
   },

   update: async function (req) {
      return `This action updates a id: ${req.params.id} comment`;
   },

   remove: async function (req) {
      return `This action removes a id: ${req.params.id} comment`;
   },
   getComment: async (req)=>{
      const {id}=req.params
      if(!id){
         throw new BadRequestException("Vui lòng cung cấp id hình ảnh")
      }
      const comment= await prisma.binh_luan.findFirst({
         where:{
            hinh_id:Number(id)
         }
      })
      
      // console.log({comment})
      return comment
   },
   postComment: async (req) => {
      const { hinh_id, nguoi_dung_id, noi_dung } = req.body;
      const newComment = await prisma.binh_luan.create({
          data: {
              hinh_id: Number(hinh_id),
              nguoi_dung_id: nguoi_dung_id,
              noi_dung: String(noi_dung)
          }
      });
  
      return newComment;
  }
  

};