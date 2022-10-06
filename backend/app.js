import express from "express";
import connectMongoose from "./util/mongooseConnect.js";
import cors from "cors";
import userLogsRouter from "./routes/userLogs-routes.js";

const port = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("traveLog");
});

app.use("/userLogs", userLogsRouter);

if (await connectMongoose()) {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}
