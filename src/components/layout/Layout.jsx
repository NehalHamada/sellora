import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
  return (
    <>
      <Header />
      <main className="container mx-auto p-6">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
