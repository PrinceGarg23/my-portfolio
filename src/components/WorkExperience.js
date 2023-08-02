import React from 'react';

const WorkExperience = () => {
  const workData = [
    {
      id: 1,
      position: 'Web Developer',
      company: 'ABC Tech Solutions',
      duration: '2018 - Present',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod libero nec ultrices bibendum.',
    },
    // Add more work experiences here
  ];

  return (
    <section className="container mx-auto mt-8">
      <h2 className="text-3xl font-semibold mb-4">Work Experience</h2>
      {workData.map((work) => (
        <div key={work.id} className="mb-6">
          <h3 className="text-xl font-semibold">{work.position}</h3>
          <p className="text-lg">{work.company}</p>
          <p>{work.duration}</p>
          <p className="mt-2">{work.description}</p>
        </div>
      ))}
    </section>
  );
};

export default WorkExperience;
