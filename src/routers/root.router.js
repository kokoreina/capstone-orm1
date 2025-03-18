import express from "express"
import userRouter from "./user.router.js"
import commentRouter from "./comment.router.js"
import imageRouter from "./image.router.js"
import saveImageRouter from "./saveImage.router.js"

const rootRouter=express.Router()
rootRouter.get('/',(request,respone,next)=>{
    respone.json("ok")
})

rootRouter.use('/user',userRouter)
rootRouter.use('/comment',commentRouter)
rootRouter.use('/image',imageRouter)
rootRouter.use('/save-image',saveImageRouter)

export default rootRouter