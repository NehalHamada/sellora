import { Plus, X } from "lucide-react";
import { useState } from "react";
import ProductForm from "../../components/product/ProductForm";

function CreateProductPage({ data, setData, categories, setCategories }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-4 right-4 flex flex-col gap-2 transition-opacity duration-300">
        <button
          onClick={() => setIsOpen(true)}
          className="w-10 h-10 bg-white/90 backdrop-blur-sm hover:bg-purple-400 hover:text-white text-gray-700 rounded-full flex items-center justify-center shadow-lg transition-all duration-300">
          <Plus className="w-5 h-5" />
        </button>
      </div>
      {isOpen && (
        <ProductForm
          data={data}
          setData={setData}
          setIsOpen={setIsOpen}
          categories={categories}
          setCategories={setCategories}
        />
      )}
    </>
  );
}

export default CreateProductPage;
