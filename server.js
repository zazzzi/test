const express = require("express");
const port = 42069;
const app = express();

app.get("/", (req, res) =>{
    res.status(200).send("This api is so useful!!!!!!1!!!")
})

app.listen(port, () => {
  console.log(`Sever is running on ${port}`);
});
