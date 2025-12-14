import "../assets/css/home.css";

function CategoryTabs({ active, onChange }) {
  const tabs = ["Semua", "Gratis", "Pemula", "Premium"];

  return (
    <div className="tabs-container">
      {tabs.map((tab, i) => (
        <button
          key={i}
          className={active === tab ? "tab active" : "tab"}
          onClick={() => onChange(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export default CategoryTabs;
