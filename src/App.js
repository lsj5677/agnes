import styles from "./App.module.css";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className={styles.wrap}>
      {/* <div className="bg"></div> */}
      <div className={styles.container}>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default App;
