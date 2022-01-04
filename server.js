const express = require("express");
const cors=require('cors');
const path = require('path')
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3200;
app.use(cors());
const usersScore = {
    "yovel": 0,
    "harel": 0,
    "elad":1,
    "ran":0,
    "dekel":0
}
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/index.html'));
  });

app.use('/static', express.static(path.join(__dirname, 'client')))

app.get('/user/:id/score', function(req, res){
    res.send(usersScore[req.params.id])
})

app.get("/answer/:id", function(req, res){
    usersScore[req.params.id] = usersScore[req.params.id] + 1;
})

//app.use('/lit/user', customersRouter);

// app.use('/lit/suppliers', suppliersRouter); 

// app.use('/weddingly/ratings', ratingsRouter);

app.use((req, res) => {
    console.log(req);
    res.status(400).json({message:'Something is broken!'});
});

app.listen(port, () => console.log((`Express server is running on port ${port}`)));