import fairytales from "../data/data.json";
import FairytaleCard from "../components/FairytaleCard.jsx";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h1 className="title">In the spotlight</h1>
      <div className="fairytale-grid">
        {fairytales.slice(0, 4).map((item) => (
          <FairytaleCard image={item.image} title={item.title} student={item.student} />
        ))}
      </div>
      <div className="projects-button">
        <Link to="/projects">
          <button>All projects</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
