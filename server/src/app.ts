import express, {Application} from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import Controller from './interfaces/controllerInterface';
import errorMiddleware from './middlewares/errorHandlerMiddleware';



class App{
    public app:Application;
    public Port:number;
    constructor(Controllers:Controller[],port:number){
       this.app=express();
       this.Port=port;
       this.initialiseDataBase();
       this.initialiseMiddleware();
       this.initialiseControllers(Controllers);
       this.initialiseErrorHandling();

    }

    private initialiseMiddleware():void{
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:true}));
        console.log('middlewares initialised')
    }
    private initialiseControllers(controllers:Controller[]):void{
        controllers.forEach((e:Controller)=>{
            this.app.use('/api',e.router)
        });
        console.log('controllers initialised')
    }
    private initialiseErrorHandling():void{
        this.app.use(errorMiddleware)
        console.log('errhndlr initialised')
       
    }
    private initialiseDataBase():void{
    mongoose.connect('mongodb+srv://rooter:rooter@cluster0.vspxkpx.mongodb.net/?retryWrites=true&w=majority').then(()=>{console.log('connected to db')}).catch(()=>{console.log('not connected to db')})
    }

    public listen():void{
        this.app.listen(this.Port,()=>{console.log('connecte to server')})
    }

}

export default App;