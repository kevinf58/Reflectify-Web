import { NavBar } from "./components/NavBar/NavBar";
import { Router } from "./Router";
// import { Footer } from "./components/common/Footer";

function App() {
  return (
    <section className="flex min-h-screen flex-col bg-white text-black">
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
