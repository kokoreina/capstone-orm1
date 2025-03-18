import { ACCESS_TOKEN_EXPIRED, ACCESS_TOKEN_SECRET, REFRESH_TOKEN_EXPIRED, REFRESH_TOKEN_SECRET } from "../common/constant/app.constant.js";
import { BadRequestException, UnauthorizationException } from "../common/helpers/error.helper.js";
import prisma from "../common/prisma/init.prisma.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
export const userService = {
   create: async function (req) {
      return `This action create`;
   },

   findAll: async function (req) {
      return `This action returns all user`;
   },

   findOne: async function (req) {
      return `This action returns a id: ${req.params.id} user`;
   },

   update: async function (req) {
      return `This action updates a id: ${req.params.id} user`;
   },

   remove: async function (req) {
      return `This action removes a id: ${req.params.id} user`;
   },
   register: async function (req) {
      // Bước 1 nhận dữ liệu email,ho_ten,mat_khau
      const {ho_ten,email,mat_khau}=req.body
      // Bước 2 lấy email và kiểm tra trong db xem đã có người dùng đó hay chưa 
      const userExits=await prisma.nguoi_dung.findFirst({
         where :{
            email:email,
         }
      })
      if(userExits){
         throw new BadRequestException (" Tài khoản đã tồn tại vui lòng đăng nhập")
      }
      // mã hoá pasword
      const pashHash= bcrypt.hashSync(mat_khau,10)
      // bước 3 : tạo người dùng mới 
      const userNew = await prisma.nguoi_dung.create({
         data :{
            email:email,
            ho_ten:ho_ten,
            mat_khau:pashHash
         }
      })
      // xoá password khi trả về
      delete userNew.mat_khau
      // gửi email chào mừng 

      return userNew
   },
   login :async(req)=>{
      const{email,mat_khau}=req.body
      // bước 1 lấy email kiểm tra trong db xem đã có người dùng đó chưa
      const userExits= await prisma.nguoi_dung.findFirst({
         where:{
            email:email
         }
      })
      if(!userExits){
         throw new BadRequestException("tài khoản chưa tồn tại vui lòng đăng ký")
      }
      // bước 2 kiểm tra password có hợp lệ không 
      if(!userExits.mat_khau){
         throw new BadRequestException("không hợp lệ vui lòng liên hệ chăm sóc khách hàng")
      }
      // so sánh password 
      const isPassword= bcrypt.compareSync(mat_khau,userExits.mat_khau)
      if(!isPassword){
         throw new BadRequestException("mật khẩu không chính xác vui lòng nhập lại")
      }
      const tokens= userService.createTokens(userExits.nguoi_dung_id)
      return tokens
   },
   refreshToken:async(req)=>{
      const refreshToken=req.headers.authorization?.split(" ")[1]
      if(!refreshToken){
         throw new UnauthorizationException("Vui lòng cung cấp token để tiếp tục sử dụng")
      }
      const accessToken=req.headers[`x-access-token`]
      if(!accessToken){
         throw new UnauthorizationException("Vui lòng cung cấp token để tiếp tục sử dụng")
      }
      const decodeRefreshToken= jwt.verify(refreshToken,REFRESH_TOKEN_SECRET)
      const decodeAccessToken= jwt.verify(accessToken,ACCESS_TOKEN_SECRET,{ignoreExpiration:true})
      // console.log({
      //    decodeAccessToken,
      //    decodeRefreshToken
      // })
      if(decodeAccessToken.userId!==decodeAccessToken.userId){
         throw new UnauthorizationException("Cấp token không hợp lệ")
      }
      const userExits=await prisma.nguoi_dung.findFirst({
         where:{
            nguoi_dung_id:decodeRefreshToken.userId
         }
      })
      if(!userExits){
         throw new UnauthorizationException("Người dùng không tồn tại")
      }
      const tokens=userService.createTokens(userExits.nguoi_dung_id)
      return tokens
   },
   getInfo:async(req)=>{
      const userInfor= await prisma.nguoi_dung.findMany()
      delete userInfor.mat_khau
      return userInfor
   },
   updateUser: async(req)=>{
      const{nguoi_dung_id,email,mat_khau,ho_ten,tuoi,anh_dai_dien}=req.body

      const userExists = await prisma.nguoi_dung.findUnique({
         where: { nguoi_dung_id: Number(nguoi_dung_id) }
      });
   
      if (!userExists) {
         throw new BadRequestException("Không có người dùng với ID này.");
      }
      const updateUser= await prisma.nguoi_dung.update({
         where:{
            nguoi_dung_id:Number(nguoi_dung_id)
         },
         data:{
            email:email,
            mat_khau:mat_khau,
            ho_ten:ho_ten,
            tuoi:Number(tuoi),
            anh_dai_dien:anh_dai_dien
         }
      })
      return updateUser
   },
   // function
   createTokens :(nguoi_dung_id)=>{
      if(!nguoi_dung_id){
         throw new BadRequestException("không có nguoi_dung_id để tạo token")
      }
      const accessToken= jwt.sign({nguoi_dung_id:nguoi_dung_id},ACCESS_TOKEN_SECRET,{expiresIn:ACCESS_TOKEN_EXPIRED})
      const refreshToken=jwt.sign({nguoi_dung_id:nguoi_dung_id},REFRESH_TOKEN_SECRET,{expiresIn:REFRESH_TOKEN_EXPIRED})
      return {
         accessToken:accessToken,
         refreshToken:refreshToken
      }
   }
};