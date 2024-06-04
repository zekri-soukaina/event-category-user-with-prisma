import eventsData from "../../data/events.json" assert { type: "json" };
import NotFoundError from "../../errors/NotFoundError.js";

const getEventById = (id) => {
  const event = eventsData.events.find((event) => event.id === id);
  if (!event) {
    throw new NotFoundError("event", id);
  }
  return event;
};

export default getEventById;
