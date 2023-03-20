import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');

app.get('/', (req: Request, res: Response) => {
    res.render('pages/index');
});

app.get('/about', (req: Request, res: Response) => {
    res.render('pages/about');
});

app.post('/users', (req: Request, res: Response) => {
    res.render('pages/users', req.body);
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
