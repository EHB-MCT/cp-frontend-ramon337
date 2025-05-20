import { NavLink } from "react-router-dom";

function FairytaleCard({ image, title, student }) {
  return (
    <NavLink className="fairytale-card" to="/fairytale">
      <img className="fairytale-image" src={image} alt={title} />
      <h2 className="fairytale-title">{title}</h2>
      <p className="fairytale-student">{student}</p>
    </NavLink>
  );
}

export default FairytaleCard;
