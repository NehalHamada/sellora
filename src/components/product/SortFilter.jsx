import { List } from "lucide-react";
export default function SortFilter({
  categories = [],
  sortBy,
  onChange,
  categoryFilter,
  onCategoryChange,
}) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between p-6 gap-4">
      <div className="flex gap-2 flex-wrap md:flex-wrap">
        <div className="hidden sm:flex gap-2 flex-wrap">
          <button
            onClick={() => onCategoryChange("")}
            className={`px-3 py-1.5 rounded-2xl border-2 cursor-pointer border-none ${
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
              className={`px-3 py-1.5 rounded-2xl border-2 cursor-pointer hover:bg-purple-300 hover:border-none hover:text-white ${
                categoryFilter === cat
                  ? "bg-purple-500 text-white border-purple-500"
                  : "border-purple-400"
              }`}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
        <div className="flex sm:hidden gap-2 overflow-x-auto">
          <button
            onClick={() => onCategoryChange("")}
            className={`p-3 rounded-full cursor-pointer ${
              categoryFilter === ""
                ? "bg-purple-300 text-white"
                : "bg-purple-100 text-purple-700"
            }`}>
            <List />
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={`p-3 rounded-full cursor-pointer ${
                categoryFilter === cat
                  ? "bg-purple-500 text-white"
                  : "bg-purple-100 text-purple-700"
              }`}>
              {cat.charAt(0).toUpperCase()}
            </button>
          ))}
        </div>
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
