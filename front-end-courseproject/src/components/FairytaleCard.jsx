import { NavLink } from "react-router-dom";

function FairytaleCard({ id, image, title, student}) {
  console.log(id);
  return (
    <NavLink to={`/making-of/${id}`} className="fairytale-card">
      <img className="fairytale-image" src={image} alt={title} />
      <h2 className="fairytale-title">{title}</h2>
      <p className="fairytale-student">{student}</p>
    </NavLink>
  );
}

export default FairytaleCard;
