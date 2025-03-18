import { ACCESS_TOKEN_SECRET } from "../constant/app.constant.js"
import { UnauthorizationException } from "../helpers/error.helper.js"
import jwt from "jsonwebtoken"
import prisma from "../prisma/init.prisma.js"
export const protect = async (req,res,next)=>{
    try{
        const accessToken=req.headers.authorization?.split(" ")[1]
        if(!accessToken){
            throw new UnauthorizationException(' Vui lòng cung cấp token để tiếp tục sử dụng ')
        }
        const decode =jwt.verify(accessToken,ACCESS_TOKEN_SECRET)
        const user= await prisma.nguoi_dung.findUnique({
            where:{
                nguoi_dung_id:decode.nguoi_dung_id,
            }
        })
        req.user=user
        next()
    }
    catch(error){
        next(error)
    }
}