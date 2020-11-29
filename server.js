const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

const connection = mysql.createConnection({
  host : conf.host,
  user : conf.user,
  password : conf.password,
  port : conf.port,
  database : conf.database
});
connection.connect();

const multer = require('multer');
const upload = multer({dest : './upload'});

app.get('/api/reservations', (req, res) => {
    connection.query(
      "SELECT reserve_number, guest_id, guest_name, room_number, number_of_members, check_in, check_out, real_check_in, real_check_out, payment_status, pick_up, cancel_status FROM Reservation NATURAL JOIN Guest WHERE isDeleted = 0",
      (err, rows, fields) => {
        res.send(rows);
      }
    )
});

app.post('/api/reservations', upload.single(), (req, res) => {
    let sql = 'UPDATE Reservation SET real_check_in = ? WHERE reserve_number = ?';
    let real_check_in = req.body.real_check_in;
    let reserve_number = req.body.reserve_number;
    let params = [real_check_in, reserve_number];
    connection.query(sql, params,
      (err, rows, fields) => {
        res.send(rows);
      });
});

app.put('/api/reservations', upload.single(), (req, res) => {
    let sql = 'UPDATE Reservation SET real_check_out = ? WHERE reserve_number = ?';
    let real_check_out = req.body.real_check_out;
    let reserve_number = req.body.reserve_number;
    let params = [real_check_out, reserve_number];
    connection.query(sql, params,
      (err, rows, fields) => {
        res.send(rows);
      });
});

app.delete('/api/reservations/:reserve_number', (req, res) => {
  let sql = 'UPDATE Reservation SET isDeleted = 1 WHERE reserve_number = ?';
  let params = [req.params.reserve_number];
  connection.query(sql, params,
    (err,rows,fields) => {
      res.send(rows);
    })
})

app.listen(port, () => console.log(`Listening on port ${port}`));