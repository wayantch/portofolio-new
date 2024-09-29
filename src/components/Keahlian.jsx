import React from 'react';

const Keahlian = () => {
  const skills = [
    { name: 'HTML', level: 'Dasar' },
    { name: 'CSS', level: 'Dasar' },
    { name: 'JavaScript', level: 'Menengah' },
    { name: 'React', level: 'Menengah' },
    { name: 'Tailwind CSS', level: 'Menengah' },
    { name: 'PHP', level: 'Dasar' },
    { name: 'Laravel', level: 'Dasar' },
    { name: 'MySQL', level: 'Dasar' },
  ];

  return (
    <div className="mt-16">
      <div className="container">
        <h1 className='border-l-4 border-primary pl-2 text-3xl font-semibold mb-5'>Keahlian</h1>
        <div className="w-full bg-white shadow-lg rounded-xl p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="border p-4 rounded-lg shadow-sm">
                <h2 className="font-semibold text-lg">{skill.name}</h2>
                <p className="text-gray-600">Tingkat: {skill.level}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Keahlian;
