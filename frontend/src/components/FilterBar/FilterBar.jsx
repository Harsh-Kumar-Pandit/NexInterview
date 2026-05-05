import "./FilterBar.css";

const FILTERS = ["All", "Easy", "Medium", "Hard"];

function FilterBar({ search, setSearch, filter, setFilter }) {
  return (
    <div className="fb">
      <input
        className="fb-input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search sessions..."
      />
      <div className="fb-filters">
        {FILTERS.map((f) => (
          <button
            key={f}
            className={`fb-btn${filter === f ? " fb-btn--active" : ""}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>
    </div>
  );
}

export default FilterBar;