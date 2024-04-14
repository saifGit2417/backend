import express from "express";
import indexRouter from "./routes/index.js";
import { PORT_NUMBER } from "./config.js";
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/v1", indexRouter);

app.get("/", (req, res) => {
  res.send(
    "thi is dummy message from node js application runing on ec2 instances"
  );
});

app.listen(PORT_NUMBER ? PORT_NUMBER : 3000, () => {
  console.log(`port running at ${PORT_NUMBER}`);
});
