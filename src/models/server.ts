import express from 'express';
import routesPublications from '../routes/publications';
import routesUser from '../routes/user';
import { Publication } from './publications';
import { User } from './user';
//import { User } from './user';
//import cors from 'cors';

class Server {
    private app: express.Application;
    private port: string;

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '3000';
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnect();
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Server run port ${this.port}`);
            
        })
    }

    routes(){
        this.app.use('/api/publications', routesPublications);
        this.app.use('/api/users', routesUser);
    }

    midlewares(){
        this.app.use(express.json());
        //this.app.use(cors());
    }

    async dbConnect() {
        try {
            await Publication.sync()
            await User.sync();
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }
}

export default Server;