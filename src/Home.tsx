import { FaDev, FaLinkedin, FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaGoogleDrive } from "react-icons/fa";
import { Link } from "react-router-dom";
const techArray = [
  "HTML",
  "CSS",
  "JavaScript",
  "Python",
  "React.js",
  "Tailwind CSS",
  "Redux",
  "TanStack",
  "Jotai",
  "Zustand",
  "Express.js",
  "WebSocket",
  "Socket.io",
  "Node.js",
  "Bunjs",
  "Denojs",
  "MongoDB (mongoose)",
  "PostgreSQL ( prisma, drizzle)",
  "Docker",
  "Redis",
  "FFmpeg",
  "AWS",
  "Sharp",
  "Axios",
  "Zod",
  "SMTP",
  "RTMP",
  "Git",
  "Github",
  "Nginx",
  "Nginx-RTMP",
  "SSL/TLS",
  "Net/TCP",
  "Dgram/UDP",
  "GraphQl",
  "grpc",
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
          <span className="text-zinc-400">
            And I make things <span className="font-bold">work.</span>
          </span>
          <p className="text-gray-400 mt-2 md:w-[500px]">
            I'm a developer based in India. My interests lies in web
            development, and solving actual problems using code.
          </p>
          <div className="mt-12 flex ">
            <a
              href="https://vercerl-clone.s3.ap-south-1.amazonaws.com/sahilkhan.pdf"
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
          <img
            className="w-80 h-80 rounded-2xl"
            loading="lazy"
            src="./hero.jpg"
            alt=""
          />
          <div className="flex mt-8 justify-around text-2xl">
            <a
              href="https://dev.to/itxsahil/"
              target="_blank"
              className="mr-2 hover:text-cyan-500"
            >
              <FaDev />
            </a>
            <a
              href="https://x.com/SahilKh32102162"
              target="_blank"
              className="mr-2 hover:text-cyan-500"
            >
              <BsTwitterX />
            </a>
            <a
              href="https://www.linkedin.com/in/sahil-khan-545b5b227/"
              target="_blank"
              className="mr-2 hover:text-cyan-500"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Itxsahil"
              target="_blank"
              className="mr-2 hover:text-cyan-500"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      <div className="text-white flex justify-center items-center gap-10 md:flex-row flex-col mt-20 m-4 p-2">
        <div className="text-gray-400 mt-2 md:w-[810px]">
          <p>
            Hello, I'm{" "}
            <span className="text-zinc-300 font-bold">Sahil Khan</span>. I have
            always been fascinated by technology and how it works under the
            hood. I started my career in 2021 in{" "}
            <span className="text-zinc-300 font-bold">
              Computer Science & Engineering
            </span>{" "}
            and wrote my first line of code in 2022. Since then, I have explored
            many tech stacks. In 2024, I joined a small startup as a part-time
            full-stack developer alongside my studies, and also took on a few
            freelance projects.
          </p>
          <p className="mt-4">
            I'm passionate about writing blogs and sharing my knowledge with
            others. Writing blogs is my way of contributing to the community
            that has helped me learn and grow. You can find my writings{" "}
            <Link to={"/blogs"}>
              <span className="font-bold text-zinc-300 hover:text-cyan-600">
                {" "}
                here.
              </span>
            </Link>
          </p>
        </div>
      </div>

      <div className="text-white flex justify-center items-center gap-10 md:flex-row flex-col mt-5 m-4 p-2">
        <div className="mt-6 flex flex-wrap gap-2 md:max-w-[800px]">
          {techArray.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-800 rounded-lg text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
