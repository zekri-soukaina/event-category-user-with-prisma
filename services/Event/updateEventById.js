import eventsData from "../../data/events.json" assert { type: "json" };
import NotFoundError from "../../errors/NotFoundError.js";

const updateEventById = (id, updatedEvent) => {
  const event = eventsData.events.find((event) => event.id === id);
  if (!event) {
    throw new NotFoundError("event", id);
  }

  const {
    title,
    description,
    location,
    image,
    startTime,
    endTime,
    createdBy,
    categoryIds,
  } = updatedEvent;

  event.createdBy = createdBy ?? event.createdBy;
  event.title = title ?? event.title;
  event.description = description ?? event.description;
  event.image = image ?? event.image;
  event.categoryIds = categoryIds ?? event.categoryIds;
  event.location = location ?? event.location;
  event.startTime = startTime ?? event.startTime;
  event.endTime = endTime ?? event.endTime;

  return event;
};

export default updateEventById;
