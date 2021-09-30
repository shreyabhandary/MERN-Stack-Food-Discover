const express = require ("express"); 
const router = express.Router(); 
const Users = require("../models/question"); 

router.get('/', (req,res) => {
    Users.find()
        .then(user => res.json(user))
        .catch(err => res.status(400).json(`Err: ${err}`)); 
}); 

//REQUEST TO ADD NEW USER
router.post('/submitQuery', (req, res) => {
    const newUser = new Users({
        name: req.body.name, 
       mobileNo: req.body. mobileNo, 
       query: req.body.query, 
        
    })

    newUser.save()
    .then(() => res.json("The Question posted successfully!"))
    .catch(err => res.status(400).json(`Error: ${err}`)); 
}); 



module.exports = router;  