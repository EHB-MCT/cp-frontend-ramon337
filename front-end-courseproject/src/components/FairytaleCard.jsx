function FairytaleCard({ image, title, student }) {
  return (
    <div className="fairytale-card">
      <img className="fairytale-image" src={image} alt={title} />
      <h2 className="fairytale-title">{title}</h2>
      <p className="fairytale-student">{student}</p>
    </div>
  );
}

export default FairytaleCard;
