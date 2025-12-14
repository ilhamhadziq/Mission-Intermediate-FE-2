import "../assets/css/home.css";

function VideoCard({ thumbnail, title, category, price, rating }) {
  return (
    <div className="video-card">
      <img src={thumbnail} alt={title} className="thumbnail" />

      <h3>{title}</h3>
      <p className="category">{category}</p>

      <div className="card-bottom">
        <span className="price">{price}</span>
        <span className="rating">⭐ {rating}</span>
      </div>
    </div>
  );
}

export default VideoCard;
