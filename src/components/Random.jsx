import Spinner from './Spinner';
import useGif from './useGif';
import GifActions from './GifActions';

const Random = () => {
      const { gif, loading, fetchData } = useGif();

      return (
            <section className="generator-card group border-violet-400/20">
                  <div className="flex items-start justify-between gap-4">
                        <div>
                              <span className="eyebrow">Surprise me</span>
                              <h2 className="mt-2 text-2xl font-bold tracking-tight text-white">Random GIF</h2>
                              <p className="mt-2 text-sm leading-6 text-slate-400">For when you know the mood, but not the meme.</p>
                        </div>
                        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-violet-500/15 text-xl ring-1 ring-violet-400/25">🍀</span>
                  </div>

                  <div className="gif-stage mt-6">
                        {loading ? <Spinner /> : gif ? <img src={gif} alt="A randomly selected GIF" /> : <div className="empty-state"><span>🍀</span><p>Your surprise is one click away</p></div>}
                  </div>

                  <GifActions gif={gif} />

                  <button className="primary-button mt-6" onClick={() => fetchData()} disabled={loading}>
                        <span>{loading ? 'Finding a GIF…' : 'Generate random GIF'}</span>
                        <span aria-hidden="true">→</span>
                  </button>
            </section>
      );
};

export default Random;
