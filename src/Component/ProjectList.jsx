import '../App.css';

function ProjectList({ images }) {
  return (
    <div className='images'>
      {images.map((e) => {
        return <img className='img' src={e.img} alt={e.category}></img>;
      })}
    </div>
  );
}

export default ProjectList;
