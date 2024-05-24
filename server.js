const express = require("express");
const app = express();
const PORT = 3000;
var data = require("./data/DataJSON.json");

app.get("/", (req, res) => {
  res.send("Welcome Santichai Test API");
});
app.get("/test/:userId", (req, res) => {
  const ID = req.params.userId * 1; // convert to number
  let result = data.filter((row) => row.userId === ID);
  res.status(200).json(result);
});

app.get("/test", (req, res) => {
  res.status(200).json(data);
});
app.listen(PORT, () => console.log(`Server is started at port ${PORT}`));
