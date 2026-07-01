import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import NoticeDetail from "./pages/NoticeDetail";
import EventDetail from "./pages/EventDetail";
import "./App.css";

function App() {
  // check localStorage first so the theme sticks between visits
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved === "true";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light");
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <BrowserRouter>
      <Header darkMode={darkMode} onToggleDarkMode={() => setDarkMode(!darkMode)} />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notices/:id" element={<NoticeDetail />} />
          <Route path="/events/:id" element={<EventDetail />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
