// components/VideoCard.js
import { FaHeart } from 'react-icons/fa';

const VideoCard = ({ video, onToggleFavorite }) => {
  return (
    <div className="flex justify-between items-center p-4 rounded-lg hover:bg-gray-50 transition-all">
      <div className="flex items-center gap-4">
        <div
          className="w-16 h-16 rounded-md flex items-center justify-center"
          style={{ background: video.thumbnailColor }}
        >
          <button className="text-white text-xl">▶</button>
        </div>
        <div>
          <h3 className="font-semibold">{video.title}</h3>
          <p className="text-sm text-gray-500">{video.description}</p>
        </div>
      </div>
      <button onClick={() => onToggleFavorite(video.id)}>
        <FaHeart
          className={`text-2xl transition ${
            video.isFavorite ? 'text-red-600' : 'text-gray-400'
          }`}
        />
      </button>
    </div>
  );
};

export default VideoCard;
