import express from "express";

const app = express();

const handleListening = () =>
    console.log('Listening on');
const Router = express.Router();

const HOME = '/';
app.use(HOME, Router);
const Sendtext = (req,res)=>
    res.send('hello');

Router.get(HOME,Sendtext);

app.listen(3000,handleListening);