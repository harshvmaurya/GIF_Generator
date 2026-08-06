import './App.css';
import Random from './components/Random';
import Tag from './components/Tag';

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#090b16] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(124,58,237,0.25),transparent_30%),radial-gradient(circle_at_88%_10%,rgba(236,72,153,0.2),transparent_28%),radial-gradient(circle_at_50%_100%,rgba(14,165,233,0.16),transparent_38%)]" />
      <div className="pointer-events-none fixed inset-0 bg-grid opacity-30" />

      <section className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-5 py-10 sm:px-8 lg:py-14">
        <header className="mx-auto max-w-2xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-semibold tracking-[0.16em] text-violet-200 uppercase shadow-lg shadow-violet-950/20">
            <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400 shadow-[0_0_10px_#e879f9]" />
            powered by GIPHY
          </div>
          <h1 className="text-4xl font-black tracking-tight sm:text-6xl">
            Find your next
            <span className="block bg-gradient-to-r from-violet-300 via-fuchsia-300 to-pink-300 bg-clip-text text-transparent">perfect GIF.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-sm leading-6 text-slate-400 sm:text-base">
            Create a little more delight in every conversation. Explore a surprise, or search for exactly the right reaction.
          </p>
        </header>

        <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        <div className="grid flex-1 grid-cols-1 gap-6 lg:grid-cols-2">
          <Random />
          <Tag />
        </div>

        <footer className="pt-10 text-center text-xs text-slate-500">
          A tiny generator for big reactions.
        </footer>
      </section>
    </main>
  );
}

export default App;
