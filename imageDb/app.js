import express from 'express'
const app = express()
// import {bodyParser} from "express";
import mongoose from 'mongoose'

import {dirname} from 'path';
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url)); 
import fs from 'fs';
// import path from 'path';
import * as path from 'path';
import'dotenv/config';
import imgModel from './model.js';
import multer from 'multer';

const _pwd = process.env.MONGO_DB_PW;
const _user = process.env.MONGO_DB_USER;
const _database = "imageDB";
const _cluster = process.env.MONGO_DB_CLUSTER;
const _uri = `mongodb+srv://${_user}:${_pwd}@${_cluster}/${_database}`;

mongoose.connect(_uri,
    { useNewUrlParser: true, useUnifiedTopology: true }, err => {
        console.log('connected')
});

// app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.urlencoded({ extended: false }))
// app.use(bodyParser.json())
app.use(express.json())

  

app.set("view engine", "ejs");

  
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
  
const upload = multer({ storage: storage });

app.get('/', (req, res) => {
    imgModel.find({}, (err, items) => {
        if (err) {
            console.log(err);
            res.status(500).send('An error occurred', err);
        }
        else {
            res.render('imagesPage', { items: items });
        }
    });
});

app.post('/', upload.single('image'), (req, res, next) => {
  
    const obj = {
        name: req.body.name,
        desc: req.body.desc,
        img: {
            data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
            contentType: 'image/png'
        }
    }
    imgModel.create(obj, (err, item) => {
        if (err) {
            console.log(err);
        }
        else {
            // item.save();
            res.redirect('/');
        }
    });
});

const port = "3002"
app.listen(port, err => {
    if (err)
        throw err
    console.log('Server listening on port', port)
})