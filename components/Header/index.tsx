import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/img/Netflix.svg";
import Avatar from "../../public/img/avatar.jpeg";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { HeaderStyle, NavAction, Nav, SubMenu, NavMobile } from "./style";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

export const Header = () => {
  const [navBlack, setNavBlack] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  useScrollPosition(({ currPos }) => {
    currPos.y < 0 ? setNavBlack(true) : setNavBlack(false);
  });

  const handleClick = () => {
    toggleMenu ? setToggleMenu(false) : setToggleMenu(true);
  };

  return (
    <HeaderStyle background={navBlack || (navBlack && toggleMenu)}>
      <Image src={Logo} alt="Logo Netflix" width={80} height={50} />

      <Nav>
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
      </Nav>
      <NavMobile>
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
      </NavMobile>
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
    </HeaderStyle>
  );
};
