import { NavBar } from "./components/Navigation/NavBar";
import { Router } from "./Router";
// import { Footer } from "./components/common/Footer";
import { useSelector } from "react-redux";
import { RootState } from "./state/store";
import { BrowserRouter } from "react-router-dom";

function App() {
  const isDarkMode = useSelector((state: RootState) => state.darkmode.toggled);

  return (
    <BrowserRouter>
      <section
        className={`flex min-h-screen flex-col transition-colors duration-300 ease-in ${
          isDarkMode
            ? "bg-black text-white selection:bg-secondary"
            : "bg-white text-black selection:bg-primary"
        }`}
      >
        <header className="sticky top-0 z-10">
          <NavBar />
        </header>
        <main className="grow">
          <Router />
        </main>
        {/* <Footer /> */}
      </section>
    </BrowserRouter>
  );
}

export default App;
