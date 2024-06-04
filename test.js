import * as Sentry from "@sentry/node";
import { Integrations as TracingIntegrations } from "@sentry/tracing";

import * as Tracing from "@sentry/tracing";
import { nodeProfilingIntegration } from "@sentry/profiling-node";
import { ProfilingIntegration } from "@sentry/profiling-node";
import { nodeProfilingIntegration } from "@sentry/profiling-node";
import * as Profiling from "@sentry/profiling-node";
import express from "express";
// import dotenv from "dotenv/config";
import "dotenv/config";

import loginRouter from "./routes/login.js";
import usersRouter from "./routes/users.js";
import eventsRouter from "./routes/events.js";
import categoriesRouter from "./routes/categories.js";

import errorHandler from "./middleware/errorHandler.js";

// dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

Sentry.init({
  dsn: "https://36643407a43738343389c612b60b814e@o4507261357588480.ingest.de.sentry.io/4507267254976592",
  integrations: [
    new TracingIntegrations.Http({ tracing: true }),
    new TracingIntegrations.Express({ app }),
    nodeProfilingIntegration(),
    new Profiling.ProfilingIntegration(), // Correct usage of Profiling integration
  ],
  tracesSampleRate: 1.0, // Capture 100% of the transactions
  profilesSampleRate: 1.0, // Capture 100% of the profiling data
});

app.use(Sentry.Handlers.requestHandler());
app.use(Sentry.Handlers.tracingHandler());

app.use(express.json());

app.use("/login", loginRouter);
app.use("/users", usersRouter);
app.use("/events", eventsRouter);
app.use("/categories", categoriesRouter);

app.get("/", (req, res) => {
  res.send("hello out there!");
  console.log("hello there");
});

app.get("/", function mainHandler(req, res) {
  res.send("Hello world!");
});

app.use(Sentry.Handlers.errorHandler());
app.use(errorHandler);

app.listen(port, () => {
  console.log(`The server is listening to port ${port}`);
});
