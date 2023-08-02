import React from 'react';

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: 'Bachelor of Science in Computer Science',
      university: 'XYZ University',
      graduationYear: '2016',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod libero nec ultrices bibendum.',
    },
    // Add more education details here
  ];

  return (
    <section className="container mx-auto mt-8">
      <h2 className="text-3xl font-semibold mb-4">Education</h2>
      {educationData.map((education) => (
        <div key={education.id} className="mb-6">
          <h3 className="text-xl font-semibold">{education.degree}</h3>
          <p className="text-lg">{education.university}</p>
          <p>{education.graduationYear}</p>
          <p className="mt-2">{education.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Education;
