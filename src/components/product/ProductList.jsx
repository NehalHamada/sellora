import ProductCard from "./ProductCard";

function ProductList({ currentProduct }) {
  return (
    <>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-6 ">
        {currentProduct.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}

export default ProductList;
