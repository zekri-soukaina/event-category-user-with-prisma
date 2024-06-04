import "./instrument.js";
import express from "express";

import dotenv from "dotenv";

import loginRouter from "./routes/login.js";
import usersRouter from "./routes/users.js";
import eventsRouter from "./routes/events.js";
import categoriesRouter from "./routes/categories.js";

import log from "./middleware/logMiddleware.js";
// import log from "./middleware/logMiddleware.js";
import errorHandler from "./middleware/errorHandler.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

// / Global middleware
app.use(express.json());
app.use(log);

// Login
app.use("/login", loginRouter);

// Resource routes
app.use("/users", usersRouter);
app.use("/events", eventsRouter);
app.use("/categories", categoriesRouter);

app.get("/", (req, res) => {
  res.send("hello out there!");
  console.log("hello there");
});

// Error handling
// this middleware  it should be the last element of the chain.
app.use(errorHandler);

app.listen(port, () => {
  console.log(`the server is listening to port ${port}`);
});
