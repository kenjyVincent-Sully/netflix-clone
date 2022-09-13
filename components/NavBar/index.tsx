import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/img/Netflix.svg";
import Avatar from "../../public/img/avatar.jpeg";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Header, NavAction, Menu, SubMenu } from "./style";

export const Nav = () => {
  const [navBlack, setNavBlack] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [vesionMobile, setVesionMobile] = useState(false);

  const translationNav = () => {
    window.scrollY > 100 ? setNavBlack(true) : setNavBlack(false);
  };

  const handleResize = () => {
    window.innerWidth > 884 ? setVesionMobile(true) : setVesionMobile(false);
  };

  const handleClick = () => {
    toggleMenu ? setToggleMenu(false) : setToggleMenu(true);
  };

  useEffect(() => {
    document.addEventListener("scroll", translationNav);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("scroll", translationNav);
      window.addEventListener("resize", handleResize);
    };
  });

  return (
    <Header background={navBlack || (navBlack && toggleMenu)}>
      <Image src={Logo} alt="Logo Netflix" width={80} height={50} />

      <Menu>
        {vesionMobile ? (
          <ul>
            <li>
              <Link href="/">Accueil</Link>
            </li>
            <li>
              <Link href="/series">Series</Link>
            </li>
            <li>
              <Link href="/films">Films</Link>
            </li>
            <li>
              <Link href="/newsWatched">Nouveautés les plus regardées</Link>
            </li>
            <li>
              <Link href="/favoris">Ma liste</Link>
            </li>
          </ul>
        ) : (
          <ul>
            <SubMenu open={toggleMenu} onClick={handleClick}>
              <a href="#">Parcourir</a>
              <ArrowDropDownIcon
                style={{
                  position: "absolute",
                  top: "19px",
                }}
              />
              <ul>
                <ArrowDropUpIcon
                  style={{
                    position: "absolute",
                    top: "-16px",
                  }}
                />
                <li>
                  <Link href="/">Accueil</Link>
                </li>
                <li>
                  <Link href="/series">Series</Link>
                </li>
                <li>
                  <Link href="/films">Films</Link>
                </li>
                <li>
                  <Link href="/newsWatched">Nouveautés les plus regardées</Link>
                </li>
                <li>
                  <Link href="/favoris">Ma liste</Link>
                </li>
              </ul>
            </SubMenu>
          </ul>
        )}
      </Menu>
      {vesionMobile ? (
        <NavAction>
          <Link href="/search">
            <SearchIcon />
          </Link>

          <Link href="/direct">Direct</Link>
          <Link href="/jeunesse">Jeunesse</Link>
          <Link href="/notification">
            <NotificationsIcon />
          </Link>
          <Link href="/avartar">
            <Image src={Avatar} alt="Avatar icon" width={30} height={30} />
          </Link>
        </NavAction>
      ) : (
        <NavAction>
          <Link href="/search">
            <SearchIcon />
          </Link>
          <Link href="/notification">
            <NotificationsIcon />
          </Link>
          <Link href="/avartar">
            <Image src={Avatar} alt="Avatar icon" width={30} height={30} />
          </Link>
        </NavAction>
      )}
    </Header>
  );
};
