import { useState } from 'react';
import ProjectList from './ProjectList';
import Toolbar from './Toolbar';
import images from './images';

const Portfolio = () => {
  const [state, setState] = useState('All');

  const array = images.filter((e) => {
    if (state === 'All') {
      return true;
    } else {
      return e.category === state;
    }
  });

  return (
    <div>
      <Toolbar filters={['All', 'Websites', 'Flayers', 'Business Cards']} selected={state} onSelectFilter={setState} />
      <ProjectList images={array} />
    </div>
  );
};

export default Portfolio;
