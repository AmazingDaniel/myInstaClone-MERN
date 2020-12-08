import cors from 'cors';
import express from 'express';
import mongoose, { get } from 'mongoose';
import Pusher from 'pusher';

// app config
const app = express();
const port = process.env.PORT || 8080;

// middlewares
app.use()
app.use(cors())

// DB config

// api routes
app.get('/',(req, res) =>res.status(200).send("hell world"))

// listen
app.listen(port, () => console.log(`listening on localhost:${port}`))