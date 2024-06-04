import express from "express";
import notFoundErrorHandler from "../middleware/notFoundErrorHandler.js";

import getEvents from "../services/Event/getEvents.js";
import getEventById from "../services/Event/getEventById.js";
import updateEventById from "../services/Event/updateEventById.js";
import deleteEventById from "../services/Event/deleteEventById.js";
import createEvent from "../services/Event/createEvent.js";

import authMiddleware from "../middleware/advancedAuth.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    // const events = getEvents();
    const { title, location } = req.query;
    const events = await getEvents(title, location);
    res.status(200).json(events);
  } catch (error) {
    console.log(error);
    res.status(500).send("something went wrong while getting list of events");
  }
});

router.post("/", authMiddleware, async (req, res) => {
  try {
    const {
      createdBy,
      title,
      description,
      image,
      categoryIds,
      location,
      startTime,
      endTime,
    } = req.body;
    const newEvent = await createEvent(
      createdBy,
      title,
      description,
      image,
      categoryIds,
      location,
      startTime,
      endTime
    );
    res.status(201).json(newEvent);
  } catch (error) {
    console.error(error);
    res.status(500).send("something went wrong while creating an event");
  }
});

router.get(
  "/:id",
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const event = await getEventById(id);
      res.status(200).json(event);
    } catch (error) {
      next(error);
    }
  },
  notFoundErrorHandler
);

router.put(
  "/:id",
  authMiddleware,
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const {
        createdBy,
        title,
        description,
        image,
        categoryIds,
        location,
        startTime,
        endTime,
      } = req.body;
      const updateEvent = await updateEventById(
        id,
        createdBy,
        title,
        description,
        image,
        categoryIds,
        location,
        startTime,
        endTime
      );
      // res.status(200).json(updateEvent);
      res.status(200).send({
        message: `Event with id ${id} successfully updated`,
        updateEvent,
      });
    } catch (error) {
      next(error);
    }
  },
  notFoundErrorHandler
);

router.delete(
  "/:id",
  authMiddleware,
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const deleteEvent = await deleteEventById(id);
      res
        .status(200)
        .json({
          message: `Event with id ${deleteEvent} successfully deleted.`,
        });
    } catch (error) {
      next(error);
    }
  },
  notFoundErrorHandler
);

export default router;
