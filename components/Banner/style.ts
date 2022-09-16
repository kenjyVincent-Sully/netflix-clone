import styled from "styled-components";
import Devices from "../../helper/Devices";

const Hero = styled.div`
  position: relative;
  z-index: 1;
`;

const ContentHero = styled.div`
  top: 0px;
  left: 0px;
  right: 0px;
  position: relative;
  padding-bottom: 40%;
  margin-bottom: 24px;
  z-index: 1;
  &::after {
    content: "";
    display: block;
    height: 100px;
    width: 100%;
    position: absolute;
    bottom: 0;
    background: linear-gradient(
      180deg,
      rgba(31, 31, 31, 0) 10%,
      rgba(31, 31, 31, 0.5),
      #111
    );
  }
`;

const BannerContent = styled.div`
  width: 100%;
  position: absolute;
  height: 56.25vw;
`;

const Description = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: 4%;
  top: 0;
  font-size: 1.2vw;
  width: 50%;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 45%);
  z-index: 2;

  p {
    font-weight: 100;
  }

  @media ${Devices.mobile} {
    width: 36%;
  }
`;

const ContentButton = styled.div`
  display: flex;

  button {
    display: flex;
    align-items: center;
    border: 1px solid;
    margin-right: 10px;
    text-transform: capitalize;
    font-weight: 300;
    border: none;
    cursor: pointer;
    font-size: 1.2vw;

    &:nth-child(1) {
      background: #fff;
      color: #000;
      &:hover {
        background: rgba(255, 255, 255, 0.75);
      }
    }
    &:nth-child(2) {
      background-color: rgba(109, 109, 110, 0.7);
      color: #fff;
      &:hover {
        background: rgba(109, 109, 110, 0.4);
      }
    }

    svg {
      margin-right: 5px;
      font-size: 15px;
    }

    @media ${Devices.mobile} {
      font-size: 1.2vw;

      svg {
        font-size: 20px;
      }
    }
  }
`;
export { Hero, BannerContent, ContentButton, Description, ContentHero };
