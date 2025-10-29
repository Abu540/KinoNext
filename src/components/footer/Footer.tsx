import Link from "next/link";
import scss from "./footer.module.scss";
import {
  FaDiscord,
  FaInstagram,
  FaVk,
  FaTelegram,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={scss.footer}>
      <div className={scss.container}>
        <div className={scss.content}>
          <nav className={scss.nav}>
            <Link href="/terms" className={scss.link}>
              Terms Of Use
            </Link>
            <Link href="/privacy" className={scss.link}>
              Privacy Policy
            </Link>
            <Link href="/about" className={scss.link}>
              About
            </Link>
            <Link href="/blog" className={scss.link}>
              Blog
            </Link>
            <Link href="/faq" className={scss.link}>
              FAQ
            </Link>
          </nav>
          <p className={scss.text}>
            EcoMovie - a unique website providing fascinating information about
            movies and TV shows. Here you can discover all the necessary details
            about your favorite films, actors, directors, ratings, and much
            more. EcoMovie boasts a stylish and intuitive interface that makes
            your search for cinematic masterpieces as convenient and enjoyable
            as possible.
          </p>
          <div className={scss.icons}>
            <FaDiscord />
            <FaInstagram />
            <FaVk />
            <FaTelegram />
            <FaGithub />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
