import { useParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { fetchEventById } from "../data/api";
import LoadingState from "../components/LoadingState";
import ErrorState from "../components/ErrorState";

export default function EventDetail() {
  const { id } = useParams();
  const { data: event, loading, error } = useFetch(() => fetchEventById(id), [id]);

  if (loading) return <LoadingState label="Loading event..." />;
  if (error) return <ErrorState message={error} />;

  return (
    <div className="detail-page">
      <Link to="/" className="back-link">
        ← Back to dashboard
      </Link>
      <h1>{event.title}</h1>
      <p className="detail-venue"> {event.venue}</p>
      <p className="detail-date">
        {new Date(event.date).toLocaleDateString("en-IN", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </p>
      <p className="detail-content">{event.content}</p>
    </div>
  );
}
