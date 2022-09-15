import styled from "styled-components";
import Devices from "../../helper/Devices";

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 56.25vw;
  position: relative;
  width: 100%;

  &::after {
    content: "";
    display: block;
    height: 100px;
    width: 100%;
    position: absolute;
    bottom: 0;
    background: linear-gradient(
      180deg,
      rgba(31, 31, 31, 0),
      rgba(31, 31, 31, 0.5),
      #111
    );
  }
`;

const BannerContent = styled.div`
  position: absolute;
  bottom: 35%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  left: 4%;
  top: 0;
  width: 70vw;
  font-size: 2.2vw;

  p {
    font-weight: 100;
  }

  @media ${Devices.mobile} {
    width: 36%;
    font-size: 1.2vw;
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
    font-size: 10px;
    padding: 3px 8px;

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
export { Hero, BannerContent, ContentButton };
