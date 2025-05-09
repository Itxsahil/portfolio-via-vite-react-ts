import { FaDev, FaLinkedin, FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaGoogleDrive } from "react-icons/fa";
const techArray = [
  "JavaScript",
  "Python",
  "React.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "Docker",
  "Redis",
  "FFmpeg",
  "AWS",
  "Sharp"
];
const HomePage = () => {
  return (
    <>
      <div className="text-white flex justify-center items-center gap-10 md:flex-row flex-col mt-20 m-2 p-2">
        <div>
          <h1 className="text-3xl font-bold">
            Trust me, I'm a{" "}
            <span className="text-cyan-500 text-4xl font-bold">
              <br />
              Software Engineer.
            </span>
          </h1>
          <p className="text-gray-400 mt-2 md:w-[500px]">
            I'm a developer based in India. My interests lies in web development
            and solving actual problems using code.
          </p>
          <div className="mt-12 flex ">
            <a
              href="./sahilkhan.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-500 text-gray-300 hover:text-white hover:border-white rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
            >
              <FaGoogleDrive className="text-lg" />
              <span className="text-sm md:text-base font-medium tracking-wide ">
                Resume
              </span>
            </a>
          </div>
        </div>
        <div className="mask-b-from-80% hover:mask-b-from-90%">
          <img className="w-80 h-80 rounded-2xl" loading="lazy" src="./hero.jpg" alt="" />
          <div className="flex mt-8 justify-around text-2xl">
            <a
              href="http://"
              target="_blank"
              className="mr-2 hover:text-cyan-500"
            >
              <FaDev />
            </a>
            <a
              href="http://"
              target="_blank"
              className="mr-2 hover:text-cyan-500"
            >
              <BsTwitterX />
            </a>
            <a
              href="http://"
              target="_blank"
              className="mr-2 hover:text-cyan-500"
            >
              <FaLinkedin />
            </a>
            <a
              href="http://"
              target="_blank"
              className="mr-2 hover:text-cyan-500"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      <div className="text-white flex justify-center items-center gap-10 md:flex-row flex-col mt-20 m-4 p-2">
        <div className="mt-6 flex flex-wrap gap-2">
          {techArray.map((tech) => 
              <span
                key={tech}
                className="px-3 py-1 bg-gray-800 rounded-lg text-sm"
              >
                {tech}
              </span>
            )}
        </div>
      </div>
    </>
  );
};

export default HomePage;
