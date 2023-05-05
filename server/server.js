const express = require("express")
const cors = require("cors")

const app = express();

app.use(express.json());
app.use(cors());

const { login } = require("./ctrl.js")

app.post("/login", login);


app.listen(4040, () => console.log("server is listening on port 4040"));