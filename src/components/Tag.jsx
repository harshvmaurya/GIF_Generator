import { useState } from 'react';
import Spinner from './Spinner';
import useGif from './useGif';
import GifActions from './GifActions';

const Tag = () => {
  const [tag, setTag] = useState('');
  const { gif, loading, fetchData } = useGif();
  const label = tag.trim() ? `${tag.trim()} GIF` : 'Search by feeling';

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData(tag.trim());
  };

  return (
    <section className="generator-card border-fuchsia-400/20">
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="eyebrow text-fuchsia-200">Make it specific</span>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-white">{label}</h2>
          <p className="mt-2 text-sm leading-6 text-slate-400">Try “celebration”, “mind blown”, or any mood in between.</p>
        </div>
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-fuchsia-500/15 text-xl ring-1 ring-fuchsia-400/25">⌕</span>
      </div>

      <div className="gif-stage mt-6">
        {loading ? <Spinner /> : gif ? <img src={gif} alt={tag ? `A GIF tagged ${tag}` : 'A selected GIF'} /> : <div className="empty-state"><span>⌕</span><p>Type a feeling to start searching</p></div>}
      </div>

      <GifActions gif={gif} />

      <form className="mt-6" onSubmit={handleSubmit}>
        <label className="sr-only" htmlFor="gif-tag">Search GIFs by tag</label>
        <div className="relative">
          <input id="gif-tag" type="text" value={tag} onChange={(event) => setTag(event.target.value)} placeholder="e.g. happy dance" className="tag-input" />
          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm text-slate-500">⌘ ↵</span>
        </div>
        <button className="primary-button secondary-button mt-3" type="submit" disabled={loading}>
          <span>{loading ? 'Searching…' : 'Search GIFs'}</span>
          <span aria-hidden="true">→</span>
        </button>
      </form>
    </section>
  );
};

export default Tag;
