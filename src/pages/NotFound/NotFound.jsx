import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center h-[80vh] text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Page Not Found</p>
      <button
        onClick={() => navigate("/")}
        className="px-6 py-3 bg-purple-400 text-white rounded-lg hover:bg-purple-600 transition">
        Go Home
      </button>
    </div>
  );
}

export default NotFound;
