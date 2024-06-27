import { PrimaryNavBar } from "./components/NavBar/PrimaryNavBar";
import { Router } from "./Router";
// import { Footer } from "./components/common/Footer";

function App() {
  return (
    <section className="flex min-h-screen flex-col bg-lightgrey text-black">
      <header className="fixed top-0 z-10">
        <PrimaryNavBar />
      </header>
      <main className="grow">
        <Router />
      </main>
      {/* <Footer /> */}
    </section>
  );
}

export default App;
