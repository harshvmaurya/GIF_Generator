import './App.css';
import Random from './components/Random';
import Tag from './components/Tag';

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#ffe45e] text-[#171717]">
      <div className="pointer-events-none fixed inset-0 bg-grid opacity-30" />

      <section className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-5 py-10 sm:px-8 lg:py-14">
        <header className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-black uppercase leading-[.9] tracking-[-.06em] sm:text-6xl">
            Find your next
            <span className="mt-2 block text-[#6d4aff]">perfect GIF.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-sm leading-6 text-neutral-800 sm:text-base">
            Create a little more delight in every conversation. Explore a surprise, or search for exactly the right reaction.
          </p>
        </header>

        <div className="my-10 h-[3px] w-full bg-black" />
        <div className="grid flex-1 grid-cols-1 gap-6 lg:grid-cols-2">
          <Random />
          <Tag />
        </div>

        <footer className="pt-10 text-center text-xs font-bold text-neutral-800">
          A tiny generator for big reactions.
        </footer>
      </section>
    </main>
  );
}

export default App;
