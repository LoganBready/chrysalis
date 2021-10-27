const express = require("express");
const app = express();
const cors = require("cors");

const ctrl = require("./controller/controller");

app.use(express.json());
app.use(cors());

app.get("/jobs", ctrl.getJobs);

app.listen(8000, () => console.log(`Running on 8000`));
