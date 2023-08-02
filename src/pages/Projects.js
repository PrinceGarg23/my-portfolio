import React from 'react';
import Layout from '../components/Layout';

const projectsData = [
  {
    id: 1,
    title: 'Project 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod libero nec.',
    imageUrl: 'https://via.placeholder.com/300',
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Duis nec orci ac ex accumsan mattis a vel nunc. Sed sed vehicula libero.',
    imageUrl: 'https://via.placeholder.com/300',
  },
  // Add more projects here
];

const Projects = () => {
  return (
      <section>
        <h2 className="text-3xl font-semibold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projectsData.map((project) => (
            <div key={project.id} className="bg-white rounded-lg p-4 shadow">
              <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover mb-4 rounded-lg" />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </section>
  );
};

export default Projects;
