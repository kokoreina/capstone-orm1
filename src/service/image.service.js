import { BadRequestException } from "../common/helpers/error.helper.js";
import prisma from "../common/prisma/init.prisma.js";

export const imageService = {
   create: async function (req) {
      return `This action create`;
   },

   findAll: async function (req) {
      return `This action returns all image`;
   },

   findOne: async function (req) {
      return `This action returns a id: ${req.params.id} image`;
   },

   update: async function (req) {
      return `This action updates a id: ${req.params.id} image`;
   },

   remove: async function (req) {
      return `This action removes a id: ${req.params.id} image`;
   },
   getImage:async(req)=>{
      
      const image= await prisma.hinh_anh.findMany()
      return image
   },
   getNameImage:async(req)=>{
      const{ten_hinh}=req.params
      if(!ten_hinh){
         throw new BadRequestException("Vui lòng cung cấp tên của hình ảnh")
      }
      const image = await prisma.hinh_anh.findMany({
         where: {
           ten_hinh: ten_hinh
         }
       });
       
      return image
   },
   getInformationImage:async(req)=>{
      const{id}=req.params
      if(!id){
         throw new BadRequestException("vui lòng cung cấp id hình ảnh")
      }
      const image=await prisma.hinh_anh.findFirst({
         where:{
            hinh_id:Number(id)
         }
      })

      const nguoi_dung_id=image.nguoi_dung_id
      const user=await prisma.nguoi_dung.findFirst({
         where:{
            nguoi_dung_id:nguoi_dung_id
         }
      })
      delete user.mat_khau
      return{image,user}
   },
   getListImage: async(req)=>{
      const {id}=req.params
      if(!id){
         throw new BadRequestException("Vui lòng cung cấp id người dùng")
      }
      const listImage= await prisma.hinh_anh.findMany({
         where:{
            nguoi_dung_id:Number(id)
         }
      })
      return listImage
   },
   deleteImage :async(req)=>{
      const {id}=req.params
      if(!id){
         throw new BadRequestException("Vui lòng cung cấp id ảnh")
      }
      const deleteImage=await prisma.hinh_anh.delete({
         where:{
            hinh_id:Number(id)
         }
      })
      return deleteImage
   },
   postImage: async(req)=>{
      const{ten_hinh,duong_dan,mo_ta,nguoi_dung_id}=req.body
      const newImage= await prisma.hinh_anh.create({
         data:{
            ten_hinh:ten_hinh,
            duong_dan:duong_dan,
            mo_ta:mo_ta,
            nguoi_dung_id:Number(nguoi_dung_id)
         }
      })
      return newImage
   }
};