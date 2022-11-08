import express from 'express';

const app = express();
import cors from 'cors';
import customer from './routes/customer'

import {mongoconnecton} from './db';
mongoconnecton();

import bodyParser from 'body-parser';
app.use(cors({origin:'*'}));
app.use(bodyParser.urlencoded(
    {
        extended:true
    }
));
app.use(bodyParser.json());


app.use("/customer",customer)

export default app;