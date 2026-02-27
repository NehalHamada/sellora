import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../components/ui/Loader";
import { ArrowBigLeft } from "lucide-react";

function ProductDetailsPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!product) return <Loader />;

  return (
    <div className="p-4 sm:p-6">
      <button
        onClick={() => navigate("/")}
        className="flex justify-start items-center mb-4 sm:justify-center cursor-pointer">
        <div className="items-center me-2">
          <ArrowBigLeft />
        </div>
        Back
      </button>

      <div>
        <div className="card bg-slate-50 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-200/50 flex flex-col ">
          <figure className="relative h-64 flex items-center justify-center p-4">
            <img
              src={product.image}
              alt={product.title}
              className="max-h-full  object-contain transition-transform duration-500 group-hover:scale-110"
            />
            <span className="absolute top-2 right-2 px-3 py-1.5 text-[9px] font-black tracking-widest uppercase rounded-full bg-white/80 text-slate-500 backdrop-blur-md">
              {product.category}
            </span>
          </figure>

          <div className="card-body flex flex-col gap-4">
            <h2 className="card-title text-lg font-semibold">
              {product.title}
            </h2>
            <p className="text-gray-700">{product.description}</p>
            <div className="flex justify-between items-center text-lg font-bold">
              <span>${product.price}</span>
              <span>⭐ {product.rating?.rate}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
