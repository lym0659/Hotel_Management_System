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
      "SELECT reserve_number, guest_id, guest_name, room_number, number_of_members, check_in, check_out, real_check_in, real_check_out, payment_status, pick_up, cancel_status FROM Reservation NATURAL JOIN Guest",
      (err, rows, fields) => {
        res.send(rows);
      }
    )
});

//app.use('/image', express.static('./upload'));

app.post('/api/reservations', (req, res) => {
    let sql = 'INSERT INTO Reservation VALUES (?, ?, ?, ?, ?, ?, 0, 0, ?, ?, ?, 0)';
    let reserve_number = req.file.reserve_number;
    let guest_id = req.body.guest_id;
    let room_number = req.body.room_number;
    let number_of_members = req.body.number_of_members;
    let check_in = req.body.check_in;
    let check_out = req.body.check_out;
    let payment_status = req.body.payment_status;
    let pick_up = req.body.pick_up;
    let cancel_status = req.body.cancel_status;
    let params = [reserve_number, guest_id, room_number, number_of_members, check_in, check_out, payment_status, pick_up, cancel_status];
    connection.query(sql, params,
      (err, rows, fields) => {
        res.send(rows);
      });
});


app.delete('/api/reservations/:id', (req, res) => {
  let sql = 'UPDATE Reservation SET isDeleted = 1 WHERE reserve_number = ?';
  let params = [req.params.reserve_number];
  connection.query(sql, params,
    (err,rows,fields) => {
      res.send(rows);
    })
})

app.listen(port, () => console.log(`Listening on port ${port}`));