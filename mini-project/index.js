const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.get("/", function (req, res) {
    res.render("index");
});

//dynamic route
app.get("/profile/:username", function (req, res) {
    const user = req.params.username;
    res.send('welcome ' + user);
});
app.get("/author/:username/:age", function (req, res) {
    const user = req.params.username;
    res.send(`welcome ${user} of age ${req.params.age}`);
});

app.listen(3000, function () {
    console.log("its runnning");
})