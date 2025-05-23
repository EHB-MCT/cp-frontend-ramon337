import useFairytales from "../hooks/useFairytales";
import FairytaleCard from "../components/FairytaleCard.jsx";
function Projects({ searchTerm }) {
  const { fairytales, loading, error } = useFairytales();

  const filteredFairytales = fairytales.filter((f) => f.fairytale.toLowerCase().includes(searchTerm.toLowerCase()) || f.nameStudent.toLowerCase().includes(searchTerm.toLowerCase()));

  if (loading) return <p>Loading...</p>;
  if (error) return <p>error: {error}</p>;
  return (
    <div className="projects">
      <h1 className="title">All Projects</h1>
      <div className="fairytale-grid">
        {filteredFairytales.map((item) => (
          <FairytaleCard key={item.id} id={item.id} image={item.imgThumbnail} title={item.fairytale} student={item.nameStudent} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
