import scss from "./header.module.scss";
import logo from "../../assets/fdq4ylbxeacih0z_1200x628__0f0882e1.jpg";
import Image from "next/image";
import Link from "next/link";
import { IoIosSearch } from "react-icons/io";

const Header = () => {
  return (
    <header className={scss.header}>
      <div className="container">
        <div className={scss.content}>
          <Image src={logo} alt="logo" width={160} height={60} priority />
          <nav className={scss.nav}>
            <Link href="/movies" className={scss.link}>
              Movies
            </Link>
            <Link href="/tvShows" className={scss.link}>
              TV Shows
            </Link>
            <Link href={"/"}>
              <IoIosSearch />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
