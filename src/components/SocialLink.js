const SocialLink = ({ link, className }) => {
  return (
    <li key={link.id}>
      <a
        href={link.href}
        target="_blank"
        rel="noreferrer"
        className={`${className}-icon`}
      >
        <i className={link.icon}></i>
      </a>
    </li>
  );
};
export default SocialLink;
