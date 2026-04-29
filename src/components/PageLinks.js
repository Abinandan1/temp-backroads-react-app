import { pageLinks } from "../data";
import PageLink from "./PageLink";

const PageLinks = ({ className }) => {
  return (
    <ul className={`${className}-links`} id="nav-links">
      {pageLinks.map((link) => {
        return <PageLink key={link.id} className={className} link={link} />;
      })}
    </ul>
  );
};
export default PageLinks;
