export default function CategoryFilter({ categories, selected, onChange }) {
  return (
    <div className="category-filter">
      <button
        className={selected === "All" ? "chip chip-active" : "chip"}
        onClick={() => onChange("All")}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          className={selected === cat ? "chip chip-active" : "chip"}
          onClick={() => onChange(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
