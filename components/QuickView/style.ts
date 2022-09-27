import styled from "styled-components";
import Devices from "../../helper/Devices";

const Hero = styled.div`
  position: relative;
  z-index: 1;
  color: #fff;

  background-size: cover;
  background-position: center center;

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
  padding-bottom: 50%;
  z-index: 1;
  background: linear-gradient(0deg, #181818, transparent 50%);

  /* &::after {
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
  } */
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

const DetailStyle = styled.div`
  background: #181818;
  color: #fff;
  display: grid;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: flex-start;
  justify-content: center;
  padding: 0px 2em 1em;
  column-gap: 2em;
  grid-template-columns: minmax(0, 2fr) minmax(0, 1fr);
  font-size: 14px;
  line-height: 20px;

  .tag-left {
    display: flex;
    flex-wrap: wrap;
    span {
      margin-right: 1em;
    }
  }
  .tag-right {
    span {
      color: #777;
    }
  }
`;

const SimilarMoviesContent = styled.div`
  color: #fff;
  padding: 0 2em;

  .content-card {
    display: flex;
    flex-wrap: wrap;
    grid-gap: 1em;

    div {
      background-color: #2f2f2f;
      width: 240px;
      color: #fff;
      border-radius: 5px;
      font-size: 14px;
      font-weight: lighter;

      img {
        object-fit: initial;
      }
    }
    p {
      color: #fff;
      font-size: 14px;
      font-weight: lighter;
    }
  }
`;

export {
  Hero,
  BannerContent,
  ContentButton,
  Description,
  ContentHero,
  ContentAudio,
  DetailStyle,
  SimilarMoviesContent,
};
