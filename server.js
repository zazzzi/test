const express = require("express");
const port = 6969;
const app = express();

app.get("/", (req, res) =>{
    res.status(200).send("This api is so useful!!!!!111!1!!!")
})

app.listen(port, () => {
  console.log(`Sever is running on ${port}`);
});
