const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
var bodyParser = require("body-parser");
const app = express();
app.use(cors());

app.use(bodyParser.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "testdb",
});
app.use(express.json());
db.connect(function (err) {
  if (err) {
    console, log("bb");
  } else {
    console.log("connected");
  }
});

app.get("/", (req, res) => {
  const q = "SELECT * FROM bookings";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

app.post("/create", (req, res) => {
  const sql =
    "INSERT INTO bookings (`id`,`username`,`email`,`address`,`gender`,`phonenumber`,`zone`,`bookingtime`,`comments`) VALUES (?)";
  const values = [
    req.body.id,
    req.body.username,
    req.body.email,
    req.body.address,
    req.body.gender,
    req.body.phonenumber,
    req.body.zone,
    req.body.bookingtime,
    req.body.comments,
  ];

  db.query(sql, [values], (err, request) => {
    if (err) return res.send(err);
    return res.json({ Status: "Success" });
  });
});

app.listen(8001, () => {
  console.log("Listning to port 8001");
});
