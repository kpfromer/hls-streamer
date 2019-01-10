import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/public', express.static(path.join(__dirname, '..', 'public')));

app.listen(3001, () => console.log('listening on port 3001'))