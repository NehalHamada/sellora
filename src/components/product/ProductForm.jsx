import axios from "axios";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function ProductForm({ data, setData, setIsOpen, categories, setCategories }) {
  const [error, setError] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    image: "",
  });
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err));
  }, [setCategories]);
  const validate = () => {
    if (!form.title.trim()) error.title = "Title is Requires";
    if (!form.description.trim()) error.description = "Description is Requires";
    if (!form.category.trim()) error.category = "Category is Requires";
    if (!form.price.trim() || form.price <= 0)
      error.price = "Price is Requires";
    if (!form.image.trim()) error.image = "Image is Requires";
    else if (!/^https?:\/\/.+\..+/.test(form.image))
      error.image = "Enter valid URL";
    setError(error);
    return Object.keys(error).length === 0;
  };
  const isFormValid = () => {
    return (
      form.title.trim() &&
      form.description.trim() &&
      form.category.trim() &&
      form.price.trim() &&
      /^https?:\/\/.+\..+/.test(form.image)
    );
  };
  const handleAddProduct = async () => {
    if (!validate()) {
      toast.error("Please Fill all Fields Correct");
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await axios.post(
        "https://fakestoreapi.com/products",
        form,
      );
      setData([...data, response.data]);
      toast.success("Product Added Successfully");
      setForm({
        title: "",
        description: "",
        category: "",
        price: "",
        image: "",
      });
      setIsOpen(false);
    } catch {
      toast.error("Something Went Wrong");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <>
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="bg-white rounded-2xl p-6 w-[90%] max-w-md relative animate-scaleIn">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-3 right-3 text-gray-500 hover:text-purple-400">
            <X />
          </button>
          <h2 className="text-xl font-bold mb-4">Create Product</h2>
          <div className="group">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-600 mb-1 group-focus-within:text-purple-400 transition-colors">
              Title
            </label>
            <input
              type="text"
              id="title"
              placeholder="Product Title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-400 mb-2"
            />
          </div>
          <div className="group">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-600 mb-1 group-focus-within:text-purple-400 transition-colors">
              Description
            </label>
            <textarea
              id="description"
              rows="4"
              placeholder="Enter product description..."
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              className="w-full rounded-xl border border-gray-300 p-3 text-sm 
              focus:outline-none focus:ring-2 focus:ring-purple-400 
              focus:border-purple-400 transition-all duration-300"></textarea>
          </div>
          <div className="group">
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-600 mb-1 group-focus-within:text-purple-400 transition-colors">
              Category
            </label>
            <select
              id="category"
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              className="w-full rounded-xl border border-gray-300 p-3 text-sm 
              bg-white 
              focus:outline-none focus:ring-2 focus:ring-purple-400 
              focus:border-purple-400 transition-all duration-300">
              <option value="">Select category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </option>
              ))}
            </select>
          </div>
          <div className="group">
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-600 mb-1 group-focus-within:text-purple-400 transition-colors">
              Price
            </label>
            <input
              type="number"
              id="price"
              placeholder="Price"
              value={form.price}
              onChange={(e) => setForm({ ...form, price: e.target.value })}
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-400 mb-4"
            />
          </div>
          <div className="group">
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-600 mb-1 group-focus-within:text-purple-400 transition-colors">
              Image URL
            </label>
            <input
              type="url"
              id="image"
              placeholder="https://example.com/image.jpg"
              value={form.image}
              onChange={(e) => setForm({ ...form, image: e.target.value })}
              className="w-full rounded-xl border border-gray-300 p-3 mb-4 text-sm
              focus:outline-none focus:ring-2 focus:ring-purple-400
              focus:border-purple-400 transition-all duration-300"
            />
          </div>
          <button
            onClick={handleAddProduct}
            disabled={!isFormValid()}
            className={`w-full py-2 rounded-lg text-white transition ${
              isFormValid() && !isSubmitting
                ? "bg-purple-400 hover:bg-purple-500"
                : "bg-gray-300 cursor-not-allowed"
            }`}>
            {isSubmitting ? "Adding..." : "Add Product"}
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductForm;
