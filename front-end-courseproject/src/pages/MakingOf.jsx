import { useParams } from "react-router-dom";
import useFairytales from "../hooks/useFairytales";
import YoutubeEmbed from "../components/YoutubeEmbed";

function MakingOf() {
  const { id } = useParams();
  const { fairytales, loading, error } = useFairytales();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>error: {error}</p>;
  const fairytale = fairytales.find((item) => item.id === id);
  if (!fairytale) return <p>Verhaal niet gevonden.</p>;
  return (
    <div className="making-of">
      <h1>Making Off - {fairytale.fairytale}</h1>
      <div className="banner">
        <img src={fairytale.imgBanner} alt="" />
      </div>
      <div className="video-section">
        <div className="video">
          <h2>explainer video</h2>
          <YoutubeEmbed embedId={fairytale.videoExplainer} />
        </div>
        <div className="description">
          <div>
            <h2>description</h2>
            <p>{fairytale.description}</p>
          </div>
          <div>
            <a href={fairytale.fairytaleLink}>
              <button>visit website</button>
            </a>
          </div>
        </div>
      </div>
      <div className="extra">
        <h2>extra images</h2>
        <div className="extra-images">
          {fairytale.imgsExtra.map((imgUrl, index) => (
            <img key={index} src={imgUrl} alt={`extra-${index}`} className="extra-image" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MakingOf;
