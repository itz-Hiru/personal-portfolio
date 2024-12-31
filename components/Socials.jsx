"use client";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/itz-Hiru/",
  },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/hirumitha/",
  },
  {
    icon: <FaFacebook />,
    path: "https://www.facebook.com/share/pmf76hxtcvadppLB/",
  },
  {
    icon: <FaWhatsapp />,
    path: "https://wa.me/+94725508919/",
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link href={item.path} key={index} className={iconStyles}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
