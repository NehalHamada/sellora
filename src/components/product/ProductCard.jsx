import { ShoppingCart, Star } from "lucide-react";
import { Link } from "react-router-dom";

function ProductCard({ item }) {
  return (
    <div className="group bg-slate-50 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-200/50 flex flex-col h-full">
      <figure className="h-64  flex items-center justify-center p-4 relative">
        <img
          src={item.image}
          alt={item.title}
          className="h-full rounded-md object-contain transition-transform duration-700 group-hover:scale-110"
        />
        <span className="absolute top-2 right-2 px-3 py-1.5 text-[9px] font-black tracking-widest uppercase rounded-full bg-white/80 text-slate-500 backdrop-blur-md">
          {item.category}
        </span>
      </figure>
      <div className="card-body flex flex-col flex-1 ">
        <Link
          to={`/products/${item.id}`}
          className="card-title text-base font-semibold line-clamp-2 min-h-12 transition-colors group-hover:text-purple-400">
          {item.title}
        </Link>

        <div className="flex items-center gap-2">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(item.rating?.rate)
                    ? "fill-amber-400 stroke-amber-400"
                    : "fill-gray-200 stroke-gray-200"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">({item.rating?.rate})</span>
        </div>
        <div className="flex justify-between items-center mt-3">
          <p className="font-bold">${item.price}</p>
          <div className="cursor-pointer p-2 rounded-md border-purple-400 hover:bg-purple-400  hover:text-white">
            <ShoppingCart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
