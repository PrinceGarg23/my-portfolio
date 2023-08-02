import React from 'react';

const Skills = () => {
  const skillsData = [
    { id: 1, skill: 'HTML5' },
    { id: 2, skill: 'CSS3' },
    { id: 3, skill: 'JavaScript' },
    { id: 4, skill: 'React' },
    { id: 5, skill: 'Node.js' },
    // Add more skills here
  ];

  return (
    <section className="container mx-auto mt-8">
      <h2 className="text-3xl font-semibold mb-4">Skills</h2>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {skillsData.map((skill) => (
          <li key={skill.id} className="bg-white p-4 shadow rounded-lg">{skill.skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
