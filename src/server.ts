import express, { Request, Response } from "express";
import path from "path";
import mainRoutes from "./routes/index";
import dotenv from "dotenv";
import mustache from "mustache-express";

dotenv.config();
const server = express();

server.set("views",path.join(__dirname,"views"));
server.set('view engine',"mustache");
server.engine('mustache', mustache());



server.use(express.static(path.join(__dirname,"../public")));

server.use(mainRoutes);

server.use((req:Request,res:Response)=>{
    res.status(404).send("Página não encontrada");
})

server.listen(process.env.PORT,()=>{
    console.log("Listen port:",process.env.PORT);
});