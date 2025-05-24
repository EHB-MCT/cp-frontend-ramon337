import { NavLink } from "react-router-dom";

function FairytaleCard({id, image, title, student}) {
  console.log(id);
  return (
    <NavLink to={`/making-of/${id}`} className="fairytale-card">
      <div className="fairytale-image">
      <img src={image} alt={title} />
      </div>
      <h2 className="fairytale-title">{title}</h2>
      <p className="fairytale-student">{student}</p>
    </NavLink>
  );
}

export default FairytaleCard;
