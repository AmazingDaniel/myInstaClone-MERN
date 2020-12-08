import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import Pusher from 'pusher';
import dbModel from './dbModel'

// app config
const app = express();
const port = process.env.PORT || 8080;
const pusher = new Pusher({
  appId: "1119824",
  key: "30aef390731e84440299",
  secret: "4c56caec3334bca9a6d0",
  cluster: "us2",
  useTLS: true
});

// middlewares
app.use(express.json());
app.use(cors());

// DB config
const connection_url = 'mongodb+srv://admin:e5naOZy0ROKmlmxl@cluster0.imkrp.mongodb.net/instaDB?retryWrites=true&w=majority'
mongoose.connect(connection_url,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.once('open', () => {
    console.log('DB Connection')

    const changeStream = mongoose.connection.collection('posts').watch()
}); 

// api routes
app.get('/', (req, res) => res.status(200).send("hello world"));

app.post("/upload", (req, res) => {
    const body = req.body;

    dbModel.create(body, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    });
});

app.get('/sync', (req, res) => {
    dbModel.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    })
})

// listen
app.listen(port, () => console.log(`listening on localhost:${port}`));