const express = require("express");
const port = 42069;
const app = express();

app.get("/", (req, res) =>{
    res.status(200).send("Heheehe thisss shit is complicated, im in danger LOL")
})

app.listen(port, () => {
  console.log(`Sever is running on ${port}`);
});
