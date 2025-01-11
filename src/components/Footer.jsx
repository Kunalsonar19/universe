import {
  // FaDiscord,
  // FaTwitter,
  // FaYoutube,
  // FaMedium,
  FaInstagram,
  // FaGithub,
} from "react-icons/fa";

const socialLinks = [
  { href: "https://www.instagram.com/krazyykunal/", icon: <FaInstagram /> },
];

const Footer = () => {
  return (
    <footer className="bg-[#5542ff] py-4 text-white w-full">
      <div className="container w-full mx-auto flex flex-col items-center justify-around gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
          ©Mithhu 2025. All rights reserved.
        </p>

        <p className="text-center text-sm font-light md:text-left">
          Hope you liked it. It is unfinished since I started to make this like
          Dec 21, 2024. Will make this our on-going personal project :)
        </p>

        <div className="flex justify-center gap-4  md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* <a
          href="#privacy-policy"
          className="text-center text-sm font-light hover:underline md:text-right"
        >
          Privacy Policy
        </a> */}
      </div>
    </footer>
  );
};

export default Footer;
