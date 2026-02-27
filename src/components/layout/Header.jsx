import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../../hooks/useCart";

function Header() {
  const { cart } = useCart();
  return (
    <div className="navbar bg-base-100 shadow-sm px-4">
      <Link to="/" className="flex-1">
        <img src="/images/logo.png" className="w-28" />
      </Link>
      <div className="flex items-center gap-4">
        <Link
          to="/cart"
          className="relative p-2 rounded-md border border-purple-400 hover:bg-purple-400 hover:text-white transition">
          <ShoppingCart />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full px-2 py-0.5">
              {cart.length}
            </span>
          )}
        </Link>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="avatar"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-40 p-2 shadow">
            <li>
              <button>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
