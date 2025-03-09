import express from "express";
import cors from "cors";
import { createServer } from "http";
import rootRouter from "./src/routers/root.router.js";
import { handleError } from "./src/common/helpers/error.helper.js";

const app = express()

//middleware giúp phân dãi dử liệu từ json sang đối tượng javascript

app.use(express.json())

app.use(cors({
    origin : true,
    credentials:true,
}))
app.use(express.static("."))
app.use( rootRouter)
app.use(handleError)
const httpServer=createServer(app);


httpServer.listen(3069,()=>{
    console.log("Server online  at port 3069")
})
