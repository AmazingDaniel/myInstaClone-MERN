import cors from 'cors';
import express from 'express';
import mongoose, { connection } from 'mongoose';
import Pusher from 'pusher';

// app config
const app = express();
const port = process.env.PORT || 8080;

// middlewares
app.use(express.json());
app.use(cors());

// DB config
const connection_url = 'mongodb+srv://admin:e5naOZy0ROKmlmxl@cluster0.imkrp.mongodb.net/instaDB?retryWrites=true&w=majority'
mongoose.connect(connection_url,{
    useCreateIndex: true,
    useNewrUrlParser: true,
    useUnifiedTopology: true
})

// api routes
app.get('/', (req, res) => res.status(200).send("hello world"));

// listen
app.listen(port, () => console.log(`listening on localhost:${port}`));