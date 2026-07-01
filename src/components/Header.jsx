import { Link } from "react-router-dom";

export default function Header({ darkMode, onToggleDarkMode }) {
  return (
    <header className="header">
      <Link to="/" className="logo">
        Campus Dashboard
      </Link>
      <button
        className="theme-toggle"
        onClick={onToggleDarkMode}
        aria-label="Toggle dark mode"
      >
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>
    </header>
  );
}
