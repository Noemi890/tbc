import { projects } from "../utils/utils";

const Projects = () => {
  return (
    <>
    <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
      {projects.map((project, i) => {
        return (
          <div id={`item${i+1}`}className="card w-96 bg-base-100 shadow-xl carousel-item">
            <div className="card-body">
              <h2 className="card-title">{project.name}</h2>
              <p>{project.intro}</p>
            </div>
            <figure>
              <img
                className="rounded-box"
                src={project.img}
                alt={project.name}
              />
            </figure>
          </div>
        );
      })}
    </div>
    <div className="flex justify-center w-full py-2 gap-2">
    <a href="#item1" className="btn btn-xs">1</a> 
    <a href="#item2" className="btn btn-xs">2</a> 
    <a href="#item3" className="btn btn-xs">3</a> 
    <a href="#item4" className="btn btn-xs">4</a>
  </div>
  </>
  );
};

export default Projects;
