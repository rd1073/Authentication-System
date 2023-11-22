const express = require("express");
const mongoose = require("mongoose")
const { User}=require("./db")



const app = express();


app.listen(5000,console.log(`Server running on 5000`));
