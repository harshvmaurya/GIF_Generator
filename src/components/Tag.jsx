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
    <section className="generator-card tag-card">
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="eyebrow">Make it specific</span>
          <h2 className="mt-2 text-2xl font-black tracking-tight text-black">{label}</h2>
          <p className="mt-2 text-sm leading-6 text-neutral-800">Try celebration, mind blown, or any mood in between.</p>
        </div>
        <span className="grid h-11 w-11 shrink-0 place-items-center border-3 border-black bg-[#a78bfa] text-xl font-black text-black" aria-hidden="true">?</span>
      </div>

      <div className="gif-stage mt-6">
        {loading ? <Spinner /> : gif ? <img src={gif} alt={tag ? `A GIF tagged ${tag}` : 'A selected GIF'} /> : <div className="empty-state"><span>?</span><p>Type a feeling to start searching</p></div>}
      </div>

      <GifActions gif={gif} />

      <form className="mt-6" onSubmit={handleSubmit}>
        <label className="sr-only" htmlFor="gif-tag">Search GIFs by tag</label>
        <div className="relative">
          <input id="gif-tag" type="text" value={tag} onChange={(event) => setTag(event.target.value)} placeholder="e.g. happy dance" className="tag-input" />
          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm font-bold text-neutral-500">ENTER</span>
        </div>
        <button className="primary-button secondary-button mt-3" type="submit" disabled={loading}>
          <span>{loading ? 'Searching...' : 'Search GIFs'}</span>
          <span aria-hidden="true">&rarr;</span>
        </button>
      </form>
    </section>
  );
};

export default Tag;
