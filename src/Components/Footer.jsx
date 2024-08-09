import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer className="flex justify-center items-center bg-primary p-2 w-full shadow-md mt-4">
      <p className="text-lg p-2 rounded flex items-center text-background">
        <a
          href="https://github.com/frustratedProton"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-background hover:text-secondary transition-colors duration-300 mr-2"
        >
          <FontAwesomeIcon icon={faGithub} className="mr-2" />
          CV Generator
        </a>
        {new Date().getFullYear()} &nbsp;
      </p>
    </footer>
  );
};

export default Footer;
