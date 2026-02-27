import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from "../../components/ui/Pagination";
import { toast } from "react-toastify";
import Loader from "../../components/ui/Loader";
import CreateProductPage from "../CreateProduct/CreateProductPage";
import ProductList from "../../components/product/ProductList";
import SortFilter from "../../components/product/SortFilter";

function ProductsPage() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const productPerPage = 10;

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setData(res.data))
      .catch((err) => toast.error(err))
      .finally(() => setLoading(false));

    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((res) => setCategories(res.data))
      .catch((err) => toast.error(err));
  }, []);

  const filteredData = categoryFilter
    ? data.filter((p) => p.category === categoryFilter)
    : [...data];

  const sortedData = [...filteredData].sort((a, b) => {
    if (sortBy === "price-asc") return a.price - b.price;
    if (sortBy === "price-desc") return b.price - a.price;
    if (sortBy.startsWith("category-")) {
      return a.category === sortBy.split("-")[1] ? -1 : 1;
    }
    return 0;
  });

  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProduct = sortedData.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );
  const totalPages = Math.ceil(sortedData.length / productPerPage);

  if (loading) return <Loader />;

  return (
    <div className="relative">
      {loading ? (
        <Loader />
      ) : (
        <>
          <SortFilter
            categories={categories}
            sortBy={sortBy}
            onChange={setSortBy}
            categoryFilter={categoryFilter}
            onCategoryChange={setCategoryFilter}
          />
          <ProductList currentProduct={currentProduct} data={data} />
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
          <CreateProductPage
            data={data}
            setData={setData}
            categories={categories}
            setCategories={setCategories}
          />
        </>
      )}
    </div>
  );
}

export default ProductsPage;
