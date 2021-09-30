const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const data = require('./data/data.json');



//setting up express
const app = express();
app.use(express.json());
app.use(cors());

app.use("/users", require("./routes/users"));
app.use("/todos", require("./routes/todo"));
//app.use("/todos", require("./routes/todo"));


// to get list of places
app.get('/getListOfPlaces', (req, res) => {
  const getRestaurants = () => {
      try {
          const result = data;
          res.status(200).send(result);
      }
      catch (error) {
          console.error(error);
      }
  }
  getRestaurants();
})

// To Add Query
app.post('/submitQuery', async (req, res) => {
  const name = req.body.name;
  const mobileNo = req.body.mobileNo;
  const query = req.body.query;

  console.log(name,  mobileNo, query);

  const newQuestion = new Question({
      name,
      mobileNo,
      query
  });

  newQuestion
      .save()
      .then(() => res.send('Success'))
      .catch((err) => { console.log(err); res.send('Error: ' + err) });
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`The server has started on port: ${PORT}`));

mongoose.connect(
  process.env.MONGODB_CONNECTION_STRING,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  (err) => {
    if (err) throw err;
    console.log("MongoDB connection established");
  }
);


module.exports = app;