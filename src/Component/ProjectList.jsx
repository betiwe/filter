import '../App.css';

function ProjectList({ images }) {
  return (
    <div className='images'>
      {images.map((e) => {
        return (
          <div className='img'>
            <img src={e.img} alt={e.category} />
          </div>
        );
      })}
    </div>
  );
}

export default ProjectList;
