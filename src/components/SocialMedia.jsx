import Link from "next/link";
import clsx from "clsx";
import {
  BsFacebook,
  BsTwitter,
  BsGithub,
  BsLinkedin,
  BsInstagram,
} from "react-icons/bs";



export const SocialMediaProfiles = [

  { title: "GitHub", href: "https://github.com/Taki7980", icon: BsGithub },
  {
    title: "Facebook",
    href: "https://www.facebook.com/Nirjhar9007",
    icon: BsFacebook,
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/nirjhar.s/",
    icon: BsInstagram,
  },
  { title: "Twitter", href: "https://twitter.com/nirjharsarkar_7", icon: BsTwitter },
  { title:"LinkedIn", href: "https://www.linkedin.com/in/nirjhar-sarkar-88878123a/",icon: BsLinkedin},
];

const SocialMedia = ({ className, invert = false }) => {
  return (
    <ul
      role="list"
      className={clsx(
        "flex gap-x-10",
        invert ? "text-white" : "text-neutral-950",
        className
      )}
    >
      {SocialMediaProfiles.map((item) => (
        <li key={item.title}>
          <Link
            href={item.href}
            aria-label={item.title}
            className={clsx(
              "transition",
              invert ? "hover:text-neutral-200" : "hover:text-neutral-700"
            )}
          >
            <item.icon className="h-6 w-6 fill-current" />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialMedia;
