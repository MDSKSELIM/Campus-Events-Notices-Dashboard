import { useParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { fetchNoticeById } from "../data/api";
import LoadingState from "../components/LoadingState";
import ErrorState from "../components/ErrorState";

export default function NoticeDetail() {
  const { id } = useParams();
  const { data: notice, loading, error } = useFetch(() => fetchNoticeById(id), [id]);

  if (loading) return <LoadingState label="Loading notice..." />;
  if (error) return <ErrorState message={error} />;

  return (
    <div className="detail-page">
      <Link to="/" className="back-link">
        ← Back to dashboard
      </Link>
      <span className="badge">{notice.category}</span>
      <h1>{notice.title}</h1>
      <p className="detail-date">
        Posted on{" "}
        {new Date(notice.postedDate).toLocaleDateString("en-IN", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </p>
      <p className="detail-content">{notice.content}</p>
    </div>
  );
}
