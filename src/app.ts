import * as express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({ status: 200, message: "200 OK" });
});

app.listen(3000, () => console.log("ok 3000"));
