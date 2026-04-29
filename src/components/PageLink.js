const PageLink = ({ link, className }) => {
  return (
    <li key={link.id}>
      <a href={link.href} className={`${className}-link`}>
        {" "}
        {link.text}{" "}
      </a>
    </li>
  );
};
export default PageLink;
