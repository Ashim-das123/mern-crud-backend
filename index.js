// const express = require('express')  this is old version nodejs although u can use this
import express from "express";      // this is new version ,, ata use korar jonno packagejson a "type" = module krte hoy

import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from "body-parser";


import Connection from "./database/db.js";
import Routes from './routes/route.js'
const app = express();
dotenv.config();
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', Routes);

const PORT = 8000;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASS;

Connection(username, password);
app.listen(PORT, () => { console.log(`Server start on port ${PORT}`) })