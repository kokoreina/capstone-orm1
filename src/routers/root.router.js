import express from "express"
import userRouter from "./user.router.js"

const rootRouter=express.Router()
rootRouter.get('/',(request,respone,next)=>{
    respone.json("ok")
})

rootRouter.use('/user',userRouter)
rootRouter.use('/comment',commentRouter)
rootRouter.use('/image',imageRouter)
rootRouter.use('/save-image',saveImageRouter)

export default rootRouter