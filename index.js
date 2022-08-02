const express = require('express');
const app = express();
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://root:root@cluster0.ncchk.mongodb.net/?retryWrites=true&w=majority")
.then(() => console.log("DBConnection Successfully Connected"))
.catch((err) => {
    console.log(err);
})

app.listen(5000, () => {
    console.log('Server running at http://localhost:5000');
})