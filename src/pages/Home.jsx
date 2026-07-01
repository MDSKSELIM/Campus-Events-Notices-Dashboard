import { useState, useMemo } from "react";
import { useFetch } from "../hooks/useFetch";
import { fetchNotices, fetchEvents } from "../data/api";
import NoticeCard from "../components/NoticeCard";
import EventCard from "../components/EventCard";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import LoadingState from "../components/LoadingState";
import ErrorState from "../components/ErrorState";

export default function Home() {
  const { data: notices, loading: noticesLoading, error: noticesError } = useFetch(fetchNotices);
  const { data: events, loading: eventsLoading, error: eventsError } = useFetch(fetchEvents);

  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // grabbing the unique categories from whatever notices we have,
  // so the filter chips update automatically if the data changes
  const categories = useMemo(() => {
    if (!notices) return [];
    const unique = new Set(notices.map((n) => n.category));
    return [...unique];
  }, [notices]);

  const filteredNotices = useMemo(() => {
    if (!notices) return [];
    return notices.filter((n) => {
      const matchesSearch = n.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === "All" || n.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [notices, searchTerm, activeCategory]);

  return (
    <div className="home">
      <section className="feed-section">
        <div className="section-header">
          <h2>Notices</h2>
        </div>

        <div className="filters">
          <SearchBar value={searchTerm} onChange={setSearchTerm} />
          {categories.length > 0 && (
            <CategoryFilter
              categories={categories}
              selected={activeCategory}
              onChange={setActiveCategory}
            />
          )}
        </div>

        {noticesLoading && <LoadingState label="Loading notices..." />}
        {noticesError && <ErrorState message={noticesError} />}

        {!noticesLoading && !noticesError && (
          <>
            {filteredNotices.length === 0 ? (
              <p className="empty-state">No notices match your search.</p>
            ) : (
              <div className="card-grid">
                {filteredNotices.map((notice) => (
                  <NoticeCard key={notice.id} notice={notice} />
                ))}
              </div>
            )}
          </>
        )}
      </section>

      <section className="feed-section">
        <div className="section-header">
          <h2>Events</h2>
        </div>

        {eventsLoading && <LoadingState label="Loading events..." />}
        {eventsError && <ErrorState message={eventsError} />}

        {!eventsLoading && !eventsError && (
          <div className="card-grid">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
