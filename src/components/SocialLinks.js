import { socialLinks } from "../data";
import SocialLink from "./SocialLink";

const SocialLinks = ({ className }) => {
  return (
    <ul className={`${className}-icons`}>
      {socialLinks.map((link) => {
        return <SocialLink key={link.id} className={className} link={link} />;
      })}
    </ul>
  );
};
export default SocialLinks;
