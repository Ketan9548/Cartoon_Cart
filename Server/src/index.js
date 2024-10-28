import express from "express";
import ConnectedDb from "../Config/DB.js";
import 'dotenv'
import 'dotenv/config'
import route from "../Routes/Authentication.js";
import cors from 'cors'




const app = express();
app.use(express.json());
app.use(cors());


ConnectedDb()
  .then(() => {
    app.listen(process.env.PORT || PORT, () => {
      console.log(`Example app listening on port http://localhost:${process.env.PORT}`);
      // console.log(process.env.PORT)
    });
  })
  .catch((err) => {
    console.log("Mongos Db connection faield !!! ", err);
  });


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use('/auth',route)
