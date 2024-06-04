import eventData from "../../data/events.json" assert { type: "json" };
import NotFoundError from "../../errors/NotFoundError.js";

const deleteEventById = (id) => {
  const index = eventData.events.findIndex((event) => event.id === id);

  if (!index) {
    throw new NotFoundError("event", id);
  }
  const deletedevent = eventData.events.splice(index, 1);
  return deletedevent;
};

export default deleteEventById;
