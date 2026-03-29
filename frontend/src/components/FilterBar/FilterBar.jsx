const filters = ["All", "Easy", "Medium", "Hard"];

function FilterBar({ search, setSearch, filter, setFilter }) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "14px",
        marginBottom: "16px",
        padding: "14px 16px",
        background: "#0d111d",
        border: "1px solid rgba(255,255,255,0.10)",
        boxShadow: "0 16px 40px rgba(0,0,0,0.18)",
      }}
    >
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search sessions…"
        style={{
          flex: "1 1 260px",
          minWidth: "220px",
          padding: "11px 14px",
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.10)",
          color: "#e2e8f0",
          outline: "none",
          fontSize: "14px",
        }}
      />

      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
        {filters.map((item) => {
          const active = filter === item;

          return (
            <button
              key={item}
              onClick={() => setFilter(item)}
              style={{
                padding: "9px 14px",
                border: "1px solid rgba(129,140,248,0.20)",
                background: active
                  ? "rgba(99,102,241,0.18)"
                  : "rgba(255,255,255,0.04)",
                color: active ? "#e0e7ff" : "#94a3b8",
                fontSize: "13px",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default FilterBar;
