import express from "express";
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello out there!");
  console.log("hello there");
});

app.listen(port, () => {
  console.log(`the server is listening to port ${port}`);
});
