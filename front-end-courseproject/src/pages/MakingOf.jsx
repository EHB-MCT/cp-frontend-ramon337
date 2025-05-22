import { useParams } from "react-router-dom";
import useFairytales from "../hooks/useFairytales";
import YoutubeEmbed from "../components/YoutubeEmbed";
import { NavLink } from "react-router-dom";

function MakingOf() {
  const { id } = useParams();
  const { fairytales, loading, error } = useFairytales();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>error: {error}</p>;
  const fairytale = fairytales.find((item) => item.id === id);
  if (!fairytale) return <p>Verhaal niet gevonden.</p>;
  return (
    <div>
      <h1>Making Off - {fairytale.fairytale}</h1>
      <div className="banner">
        <img src={fairytale.imgBanner} alt="" />
      </div>
      <div className="section">
        <div className="video">
          <h2>explainer video</h2>
        <YoutubeEmbed embedId={fairytale.videoExplainer} />
        </div>
        <div className="description">
          <h2>description</h2>
          <p>{fairytale.description}</p>
          <NavLink to={fairytale.fairytaleLink}>
          <button>visit website</button>
          </NavLink>
        </div>
        <div>

        </div>
      </div>
    </div>
  );
}

export default MakingOf;
