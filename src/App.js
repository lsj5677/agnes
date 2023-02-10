import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div className="relative flex flex-col">
      <Header />
      <div className="flex-auto w-full min-h-screen lg:relative">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
