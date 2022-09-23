import styled from "styled-components";
import Devices from "../../helper/Devices";

const Hero = styled.div`
  position: relative;
  z-index: 1;
  background-color: red;

  .close {
    position: absolute;
    right: 0px;
    cursor: pointer;
    z-index: 3;

    &:hover {
      background-color: transparent;
    }
    svg {
      color: black;
      height: 36px;
      width: 36px;
    }
  }
`;

const ContentHero = styled.div`
  position: relative;
  padding-bottom: 70%;
  margin-bottom: 24px;
  z-index: 1;
  background: linear-gradient(0deg, #181818, transparent 50%);
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
    margin-right: 10px;
    text-transform: capitalize;
    font-weight: 300;
    border: none;
    cursor: pointer;
    padding-left: 1rem;
    padding-right: 1.4rem;
    color: #fff;

    &:hover {
      background-color: transparent;
    }
    &.play {
      background: #fff;
      color: #000;
      &:hover {
        background: rgba(255, 255, 255, 0.75);
      }
    }
    &.more-info {
      color: #fff;
    }

    svg {
      margin-right: 5px;
    }

    @media ${Devices.mobile} {
      font-size: 1.2vw;

      svg {
        font-size: 20px;
      }
    }
  }
`;

const ContentAudio = styled.div`
  position: absolute;
  right: 0;
`;

export {
  Hero,
  BannerContent,
  ContentButton,
  Description,
  ContentHero,
  ContentAudio,
};
