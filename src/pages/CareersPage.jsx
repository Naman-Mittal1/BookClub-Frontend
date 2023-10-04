import React, {useState} from 'react';
import FooterUn from '../components/Footer/FooterUn';

const CareersPage = () => {
  const jobListings = [
    {
      title: "Frontend Developer Intern",
      description: "Join our team as a Frontend Developer Intern and work on building user-friendly web interfaces. If you have a passion for creating beautiful and responsive web experiences.",
    },
    {
      title: "Backend Developer Intern",
      description: "We're looking for Backend Developer Interns to help us build and maintain the server-side of our applications. If you're interested in working with databases and server technologies, apply now!",
    },
    {
      title: "MERN Stack Developer Intern",
      description: "As a MERN Stack Developer Intern, you'll get the opportunity to work on both the front-end and back-end of our projects. Join us if you have a passion for full-stack development!",
    },
    {
      title: "UI/UX Designer Intern",
      description: "Join our design team and work on creating visually appealing and user-friendly interfaces. If you have an eye for design and a passion for user experience, this role is for you!",
    },
    {
      title: "Content Writer Intern",
      description: "We're looking for Content Writer Interns to help us create engaging content for our platform. If you have a way with words and a love for storytelling, apply now for this role!",
    },
    // Add more job listings here
];

const maxWords = 50;

const truncateDescription = (description) => {
  const words = description.split(' ');
  if (words.length > maxWords) {
    return words.slice(0, maxWords).join(' ') + ' ...';
  }
  return description;
};

const [expandedDescriptions, setExpandedDescriptions] = useState({});

const toggleExpansion = (index) => {
  setExpandedDescriptions((prev) => ({
    ...prev,
    [index]: !prev[index],
  }));
};

return (
  <>
    <div className="bg-gray-900 text-white p-3 sm:p-5 md:p-8">
      <h1 className="text-2xl md:text-4xl mb-4 md:mb-5 text-center font-extrabold text-blue-600">
        Join Our Team
      </h1>
      <p className="text-base md:text-lg mb-8 text-center">
        To Apply for the Below Positions, send your resume to{' '}
        <a href="mailto:bookmates.in@gmail.com" className="text-blue-400">
          bookmates.in@gmail.com
        </a>
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 justify-center md:grid-cols-2 lg:grid-cols-3 gap-4">
        {jobListings.map((job, index) => (
          <div
            key={index}
            className="flex flex-col h-full transform transition duration-300"
          >
            <div className="p-4 md:p-6 border-2 outline-none border-blue-600/30 rounded-lg shadow-md flex-1">
              <h2 className="text-lg md:text-xl font-semibold mb-2 md:mb-4 text-blue-400  ">
                {job.title}
              </h2>
              <p className="text-sm md:text-base leading-6 md:leading-7 mb-4">
                {expandedDescriptions[index]
                  ? job.description
                  : truncateDescription(job.description)}
              </p>
              {job.description.split(' ').length > maxWords && (
                <span
                  className="cursor-pointer text-blue-400  focus:outline-none"
                  onClick={() => toggleExpansion(index)}
                >
                  {expandedDescriptions[index] ? '' : 'Read more'}
                </span>
              )}
            </div>
            <a href="mailto:bookmates.in@gmail.com" >
            <button style={{backgroundColor: '#1b2039'}} className="w-full hover:bg-gray-950 text-gray-200 font-semibold py-2 px-4 rounded-b-lg focus:outline-none">
              Apply Now
            </button>
            </a>
          </div>
        ))}
      </div>
    </div>
    <FooterUn />
  </>
);
};

export default CareersPage;