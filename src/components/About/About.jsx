import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
// import profileImage from "../../assets/profile"
function About() {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left side content */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greating */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Kaluram
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <Typewriter
              words={[
                "Node.js Developer",
                "Fullstack Developer",
                "App Developer",
                "UI/UX Designer",
                "Coder",
              ]}
              loop={5}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h3>
          {/* About me paragraph */}
          <p className="text-gray-400">
            Hi, I'm Kaluram, a passionate Full Stack Developer with 2 years of
            hands-on experience building scalable and user-friendly web
            applications. I specialize in working with the MERN stack (MongoDB,
            Express, React, Node.js) and have a strong foundation in both
            frontend and backend development. I enjoy solving real-world
            problems through clean code, optimized APIs, and responsive user
            interfaces. I'm also experienced with RESTful APIs, Firebase, AWS
            (EC2, S3), MongoDB Aggregations, and managing deployments for
            high-performance systems.
          </p>
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1OP-SZ0F7MPrD3sn4i9CUsgSJjdRZbWjS/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg,#8245ec, #a855f7)",
              boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
          >
            Download CV
          </a>
        </div>
        {/* Right side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 md:w-[20rem] md:h-[20rem] border-4 border-purple-700 rounded-full"
            tilteMaxAngleX={20}
            titleMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf6pQOX0qoaCzo2mqTwT_-Z2oZt4D70LZ1Ww&s"
              alt="Kaluram"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
}
export default About;
