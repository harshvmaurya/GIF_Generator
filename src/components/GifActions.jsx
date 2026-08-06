import { FiCopy, FiDownload } from 'react-icons/fi';
import toast from 'react-hot-toast';

const GifActions = ({ gif }) => {
  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(gif);
      toast.success('GIF link copied!');
    } catch {
      toast.error('Could not copy the GIF link.');
    }
  };

  const downloadGif = async () => {
    try {
      const response = await fetch(gif);
      if (!response.ok) throw new Error('Download failed');

      const blobUrl = URL.createObjectURL(await response.blob());
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = 'giphy-gif.gif';
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(blobUrl);
      toast.success('Download started!');
    } catch {
      toast.error('Could not download this GIF. Try opening its link instead.');
    }
  };

  if (!gif) return null;

  return (
    <div className="gif-actions" aria-label="GIF actions">
      <button type="button" className="action-button" onClick={copyLink}>
        <FiCopy aria-hidden="true" />
        Copy link
      </button>
      <button type="button" className="action-button" onClick={downloadGif}>
        <FiDownload aria-hidden="true" />
        Download
      </button>
    </div>
  );
};

export default GifActions;
