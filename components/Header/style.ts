import styled from "styled-components";
import Devices from "../../helper/Devices";

const HeaderStyle = styled.header<{ background: boolean }>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  position: fixed;
  width: 100%;
  padding: 5px 4%;
  font-size: 0.8rem;
  height: 60px;
  background: ${(props) =>
    props.background
      ? "#141414"
      : "linear-gradient(180deg, rgba(0, 0, 0, 0.7) 10%, transparent)"};

  font-weight: 100;
  transition: background-color 0.5s ease-in-out;
  z-index: 10;
  @media ${Devices.mobile} {
    justify-content: space-between;
  }
`;

const NavAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;

  a {
    padding: 5px 10px;
    &:nth-child(2),
    &:nth-child(3) {
      display: none;
    }

    @media ${Devices.mobile} {
      &:nth-child(2),
      &:nth-child(3) {
        display: block;
      }
    }
  }
`;

const Nav = styled.nav`
  display: none;
  li {
    margin-left: 20px;
  }
  @media ${Devices.mobile} {
    display: block;
  }
`;

const NavMobile = styled.nav`
  li {
    margin-left: 20px;
  }
  @media ${Devices.mobile} {
    display: none;
  }
`;
const SubMenu = styled.li<{ open: boolean }>`
  ul {
    visibility: ${(props) => (props.open ? "visible" : "hidden")};
    background: rgba(0, 0, 0, 0.8);
    width: ${(props) => (props.open ? "265px" : "auto")};
    border-top: 2px solid;

    width: 250px;
    display: flex;
    align-items: center;
    flex-direction: column;

    position: absolute;
    top: 100%;
    left: 4%;
    li {
      padding: 15px 0;
      margin-left: 0;
    }
  }
`;

export { HeaderStyle, NavAction, Nav, SubMenu, NavMobile };
