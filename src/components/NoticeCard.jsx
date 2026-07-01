import { Link } from "react-router-dom";

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function NoticeCard({ notice }) {
  return (
    <Link to={`/notices/${notice.id}`} className="card">
      <span className="badge">{notice.category}</span>
      <h3>{notice.title}</h3>
      <p className="card-date">{formatDate(notice.postedDate)}</p>
    </Link>
  );
}
