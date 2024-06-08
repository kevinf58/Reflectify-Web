import { PrimaryNavBar } from "./components/NavBar/PrimaryNavBar";
import { SecondaryNavBar } from "./components/NavBar/SecondaryNavBar";
// import { Router } from "./Router";
import { Footer } from "./components/common/Footer";

function App() {
  return (
    <>
      <section className="flex flex-col min-h-screen">
        <header className="sticky top-0 z-10">
          <PrimaryNavBar />
          <SecondaryNavBar />
        </header>
        <main className="grow">
          {/* <Router /> */}
        </main>
        <Footer />
      </section>
    </>
  );
}

export default App;
