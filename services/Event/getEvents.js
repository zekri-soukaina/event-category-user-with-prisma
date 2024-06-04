import eventsData from "../../data/events.json" assert { type: "json" };

// const getEvents = () => {
//   let events = eventsData.events;
//   return events;
// };

const getEvents = (title, location) => {
  return eventsData.events.filter((event) => {
    return (
      (!title || event.title === title) &&
      (!location || event.location === location)
    );
  });
};
export default getEvents;
