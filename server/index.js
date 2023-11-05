const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const con = mysql.createConnection ({
    user: "root",
    host: "localhost",
    password: "",
    database: "register"
})

app.listen (3009, () => {
    console.log("BACKEND SERVER RUNNING - wooohaa ");
})