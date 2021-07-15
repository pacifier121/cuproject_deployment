const mysql = require('mysql2');
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();

const table = "products";
const con = mysql.createConnection({
    host: 'localhost',
    user: 'me',
    password: 'passpass',
    database: 'project'
});

app.set('view engine', 'ejs');
app.use(express.static("public"));

app.use(bodyParser.urlencoded({
    extended: true
}));


con.connect(function(err) {
    if (err) throw err;
    console.log('Connected to MySQL server');
})

app.get("/", (req, res) => {
    console.log("GET request on /");
    con.query('SELECT * FROM ' + table + " ORDER BY RAND() LIMIT 10", (err, result) => {
        if (err) throw err;
        res.render("home", {
            products: result
        })
    })
})

app.get("/categories", (req, res) => {
    res.render("categories", {

    })
})

app.post("/", (req, res) => {
    const type = req.body.type;
    const value = req.body.value;
    console.log("POST request recieved on /");
    if (type == "category") {
        con.query('SELECT * FROM ' + table + " WHERE category = \"" + value + "\"", (err, result) => {
            if (err) throw err;
            res.render("category", {
                categories: result,
                categ: value
            })
        })
    } else if (type == "product") {
        con.query('SELECT * FROM ' + table + " WHERE id = \"" + value + "\"", (err, result) => {
            if (err) throw err;
            res.render("product", {
                product: result
            })
        })
    }
})




port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Successfully connected to server on port ${port}`);
})