import useFairytales from "../hooks/useFairytales";
import FairytaleCard from "../components/FairytaleCard.jsx";
import { Link } from "react-router-dom";

function Home({ searchTerm }) {
  const { fairytales, loading, error } = useFairytales();

  const filteredFairytales = fairytales.filter((f) => f.fairytale.toLowerCase().includes(searchTerm.toLowerCase()) || f.nameStudent.toLowerCase().includes(searchTerm.toLowerCase()));
  if (loading) return <p>Loading...</p>;
  if (error) return <p>error: {error}</p>;
  console.log(fairytales);
  return (
    <div className="home">
      <h1 className="title">In the spotlight</h1>
      <div className="fairytale-grid">
        {filteredFairytales.slice(0, 4).map((item) => (
          <FairytaleCard key={item.id} id={item.id} image={item.imgThumbnail} title={item.fairytale} student={item.nameStudent} />
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
