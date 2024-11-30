import express from 'express';
import dotenv from "dotenv";
import mongoose from "mongoose";
import questions from "./routers/questions.js";

// console.log("questions", questions);

dotenv.config();

mongoose.connect(process.env.MONGOBD);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection Error:"));
db.once(
  "open",
  console.log.bind(console, "Successfully opened connection to Mongo!")
);

const PORT = process.env.PORT || 4040;

const app = express();

const logging = (request, response, next) => {
  console.log(
    `${request.method} ${request.url} ${new Date().toLocaleString("en-us")}`
  );
  next();
};



const cors = (req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type, Accept,Authorization,Origin"
  );
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
};

app.use(cors);
app.use(express.json());
app.use(logging);



app.get("/status", (request, response) => {

  response.send(JSON.stringify({ message: "Service healthy" }));
});


// app.listen(4040, () => console.log("Listening on port 4040"));


app.use("/questions", questions);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
