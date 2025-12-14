import VideoCard from "./VideoCard";
import "../assets/css/home.css";

function VideoGrid({ data }) {
  return (
    <div className="video-grid">
      {data.map((item, index) => (
        <VideoCard
          key={index}
          thumbnail={item.thumbnail}
          title={item.title}
          category={item.category}
          price={item.price}
          rating={item.rating}
        />
      ))}
    </div>
  );
}

export default VideoGrid;
