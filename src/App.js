import { Footer, Header, Hero } from "./components";


function App() {
  return (
    <div className="App min-h-screen mb-44">
      <header className="App-header">
        <Header />
      </header>
      <section>
        <Hero />
      </section>
      <Footer />
    </div>
  );
}

export default App;
