import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { ArrowBigLeft } from "lucide-react";

function CartPage() {
  const { cart, removeFromCart, handleIncrease, handleDecrease, totalPrice } =
    useCart();
  const navigate = useNavigate();

  return (
    <div className="p-6">
      {cart.length === 0 && (
        <div className="flex flex-col justify-center items-center h-[60vh]">
          <p className="text-gray-500 text-lg mb-4">Your cart is empty</p>
          <button
            className="px-6 py-3 bg-purple-400 text-white rounded-lg hover:bg-purple-600 transition"
            onClick={() => navigate("/")}>
            Go to Shopping
          </button>
        </div>
      )}
      {cart.length > 0 && (
        <>
          <button
            onClick={() => navigate("/")}
            className="flex justify-start items-center mb-4 sm:justify-center cursor-pointer">
            <div className="items-center me-2">
              <ArrowBigLeft />
            </div>
            Back
          </button>
          <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
        </>
      )}

      {cart.map((item) => (
        <div
          key={item.id}
          className="flex items-center gap-4 mb-4 border-b pb-4">
          <img src={item.image} className="w-20 h-20 object-contain" />

          <div className="flex-1">
            <h3>{item.title}</h3>
            <p>${item.price}</p>

            <div className="flex gap-2 items-center mt-2">
              <button
                onClick={() => handleDecrease(item.id)}
                className="px-3 py-1 bg-gray-200 hover:bg-gray-300 transition-colors font-bold">
                -
              </button>
              <span className="px-4 py-1 bg-white font-medium">
                {item.quantity}
              </span>
              <button
                onClick={() => handleIncrease(item.id)}
                className="px-3 py-1 bg-gray-200 hover:bg-gray-300 transition-colors font-bold">
                +
              </button>
            </div>
          </div>

          <button
            onClick={() => removeFromCart(item.id)}
            className="ml-4 px-3 py-1 bg-purple-400 text-white rounded-lg hover:bg-purple-600 transition-colors font-medium">
            Remove
          </button>
        </div>
      ))}

      {cart.length > 0 && (
        <>
          <h3 className="text-xl font-bold mt-6">
            Total: ${totalPrice.toFixed(2)}
          </h3>
          <button className="cursor-pointer w-full mt-3 border-2 p-2 rounded-2xl text-l border-purple-400 hover:border-none hover:bg-purple-400 hover:text-white">
            Continue Process
          </button>
        </>
      )}
    </div>
  );
}

export default CartPage;
