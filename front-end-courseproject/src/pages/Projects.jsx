import fairytales from "../data/data.json";
import FairytaleCard from "../components/FairytaleCard";
function Projects() {
  return (
    <div className="projects">
      <h1 className="title">All Projects</h1>
      <div className="fairytale-grid">
        {fairytales.map((item, index) => (
          <FairytaleCard key={index} image={item.image} title={item.title} student={item.student} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
