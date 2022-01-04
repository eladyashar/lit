const express = require("express");
const cors=require('cors');
const path = require('path')
require('dotenv').config(); 
// const { customersRouter } = require("./routers/customersRouter");
// const { suppliersRouter } = require("./routers/suppliersRouter");
// const { ratingsRouter } = require("./routers/ratingsRouter");

const app = express();
const port = process.env.PORT || 3200;
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/static', express.static(path.join(__dirname, 'client')))
//app.use('/lit/user', customersRouter);

// app.use('/lit/suppliers', suppliersRouter); 

// app.use('/weddingly/ratings', ratingsRouter);

app.use((req, res) => {
    console.log(req);
    res.status(400).json({message:'Something is broken!'});
});

app.listen(port, () => console.log((`Express server is running on port ${port}`)));