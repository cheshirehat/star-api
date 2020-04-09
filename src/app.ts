import * as express from "express";
import router from "./routes/index";

const app = express();

app.get("/", (req, res) => {
  res.json({ status: 200, message: "200 OK" });
});

app.use("/api", router);

app.listen(3000, () => console.log("ok 3000"));
