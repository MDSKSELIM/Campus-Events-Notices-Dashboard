import { Link } from "react-router-dom";

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function EventCard({ event }) {
  return (
    <Link to={`/events/${event.id}`} className="card event-card">
      <h3>{event.title}</h3>
      <p className="card-venue"> {event.venue}</p>
      <p className="card-date">{formatDate(event.date)}</p>
    </Link>
  );
}
