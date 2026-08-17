import Spinner from './Spinner';
import useGif from './useGif';
import GifActions from './GifActions';

const Random = () => {
  const { gif, loading, fetchData } = useGif();

  return (
    <section className="generator-card random-card group">
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="eyebrow">Surprise me</span>
          <h2 className="mt-2 text-2xl font-black tracking-tight text-black">Random GIF</h2>
          <p className="mt-2 text-sm leading-6 text-neutral-800">For when you know the mood, but not the meme.</p>
        </div>
        <span className="grid h-11 w-11 shrink-0 place-items-center border-3 border-black bg-[#ff5c8a] text-xl font-black text-black" aria-hidden="true">*</span>
      </div>

      <div className="gif-stage mt-6">
        {loading ? <Spinner /> : gif ? <img src={gif} alt="A randomly selected GIF" /> : <div className="empty-state"><span>*</span><p>Your surprise is one click away</p></div>}
      </div>

      <GifActions gif={gif} />

      <button className="primary-button mt-6" onClick={() => fetchData()} disabled={loading}>
        <span>{loading ? 'Finding a GIF...' : 'Generate random GIF'}</span>
        <span aria-hidden="true">&rarr;</span>
      </button>
    </section>
  );
};

export default Random;
