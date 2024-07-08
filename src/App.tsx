import { NavBar } from "./components/NavBar/NavBar";
import { Router } from "./Router";
// import { Footer } from "./components/common/Footer";
import { useSelector } from "react-redux";
import { RootState } from "./state/store";

function App() {
  const isDarkMode = useSelector((state: RootState) => state.darkmode.toggled);

  return (
    <section
      className={`flex min-h-screen flex-col transition-colors duration-300 ease-in ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
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
  );
}

export default App;
