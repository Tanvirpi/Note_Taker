const app = require("express").Router();
const uuid = require('uuid');
let db = require("../db/db.json")
const fs = require('fs');

// Gets Notes
router.get('/api/notes', (req, res) =>{
db = JSON.parse(fs.readFileSync("./db/db.json"))
    res.json(db)

} );


// Create Member
router.post('/', (req, res) => {
  const newNote = {
    ...req.body,
    id: uuid.v4()
     };

 

  db.push(newNote);
  fs.writeFileSync('./db/db.json', JSON.stringify(db),function(err,data){
    if(err) throw err;

  });
  res.json(db);

});
