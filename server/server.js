require('dotenv').config();
const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
, cors = require('cors')
const feedCtrl = require('./feedCtrl')
const userCtrl = require('./userCtrl')

const app = express();
app.use(cors())
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING)
.then( db => {
    app.set('db', db)
})

const db = app.get('db');


app.get('/api/getfollowingfeed/:id', feedCtrl.getFollowingFeed);

app.post(`/api/checkuser`, userCtrl.checkUser)

const port = 6969;

app.listen(port, () => console.log(`show me the money ${port}`));