import BackgroundImage from '../assets/images/Skills-bg.jpg'; // Path to your background image

const skills = [
      { name: 'HTML', level: '85%' },
      { name: 'CSS', level: '65%' },
      { name: 'JavaScript', level: '65%' },
      { name: 'React', level: '60%' },
      { name: 'Node.js', level: '80%' },
      // ... Add more skills as needed
];

const SkillsSection = () => {
      return (
            <div
                  className="py-12 text-white"
                  style={{
                        backgroundImage: `url(${BackgroundImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundAttachment: 'fixed'
                  }}
            >
                  <div className="container mx-auto p-4 bg-black bg-opacity-50 rounded-lg">
                        <div className="text-center">
                              <h2 className="text-3xl md:text-4xl font-bold">My Skills</h2>
                              <p className="text-lg md:text-xl mt-4">Technologies I love working with:</p>
                        </div>
                        <div className="mt-8">
                              {skills.map((skill, index) => (
                                    <div key={index} className="mb-4">
                                          <div className="flex justify-between items-center">
                                                <span className="text-base md:text-lg font-medium">{skill.name}</span>
                                                <span className="text-xs md:text-sm font-medium">{skill.level}</span>
                                          </div>
                                          <div className="w-full bg-gray-700 rounded-full h-2.5">
                                                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: skill.level }}></div>
                                          </div>
                                    </div>
                              ))}
                        </div>
                  </div>
            </div>
      );
};

export default SkillsSection;
