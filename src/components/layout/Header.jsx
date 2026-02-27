import { Link } from "react-router-dom";
import logo from "/src/assets/images/logo.png";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../../hooks/useCart";

function Header({ product }) {
  const addToCart = useCart();
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <Link to="/" className="flex-1 items-center">
        <img src={logo} className="w-30" />
      </Link>
      <div className="flex-1 flex justify-end items-center gap-2">
        <div className="dropdown dropdown-end">
          <div
            className="cursor-pointer p-2 rounded-md border-purple-400 hover:bg-purple-400 hover:text-white"
            onClick={() => product && addToCart(product)}>
            <ShoppingCart />
          </div>
          <span className="absolute top-0 right-0">0</span>
        </div>

        <div className="dropdown dropdown-end ml-3">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow">
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
