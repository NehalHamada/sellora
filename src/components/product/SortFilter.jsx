export default function SortFilter({
  categories = [],
  sortBy,
  onChange,
  categoryFilter,
  onCategoryChange,
}) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between p-6 gap-4">
      <div className="flex gap-2 flex-wrap">
        <button
          onClick={() => onCategoryChange("")}
          className={`px-3 py-1.5 rounded-2xl border-2 cursor-pointer ${
            categoryFilter === ""
              ? "bg-purple-300 text-white border-purple-500"
              : "border-purple-400"
          }`}>
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onCategoryChange(cat)}
            className={`px-3 py-1.5 rounded-2xl border-2 cursor-pointer hover:bg-purple-300 hover:border-none hover:text-white hover:scale-120 ${
              categoryFilter === cat
                ? "bg-purple-500 text-white border-purple-500"
                : "border-purple-400"
            }`}>
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>
      <select
        value={sortBy}
        onChange={(e) => onChange(e.target.value)}
        className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-400">
        <option value="">Sort by</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
      </select>
    </div>
  );
}
