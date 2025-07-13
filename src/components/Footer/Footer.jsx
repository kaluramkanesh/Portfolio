import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
function Footer() {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-semibold text-purple-500">Kaluram</h2>
        {/* Nagigation links */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "projects" },
            { name: "Education", id: "education" },
          ].map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => handleScroll(item.id)}
                className="text-white hover:text-purple-500 sm:text-base my-1 cursor-pointer"
              >
                {item.name}
              </button>
            );
          })}
        </nav>
        {/* Social media icons */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            { icon: <FaFacebook />, link: "" },
            { icon: <FaGithub />, link: "https://github.com/kaluramkanesh" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/kaluram/" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/kaluram_kawchhaya/" },
            { icon: <FaYoutube />, link: "https://www.youtube.com/@kaluram_kanoje" },
          ].map((item,index)=>{
            return <a key={index} href={item.link} target="_blank" className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110">{item.icon}</a>
          })}
        </div>
        {/* copyright text */}
        <p className="text-sm text-gray-400 mt-6">© 2025 Kaluram All rights reserved.</p>
      </div>
    </footer>
  );
}
export default Footer;
