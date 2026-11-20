function ImageCard({ imageUrl, title, description }) {
  return (
    <>
      <article className="image-card">
        <img src={imageUrl} alt={title} className="card-image" />
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="card-description">{description}</p>
        </div>
      </article>
    </>
  );
}

export default ImageCard;