import styled from "styled-components";
import Devices from "../../helper/Devices";

const ContentRow = styled.div`
  padding-left: 4%;

  h2 {
    font-size: 12px;
    font-weight: 500;
    margin-right: 4px;
  }
`;

const BoxContent = styled.div`
  display: flex;
  align-items: center;
  overflow-x: visible;
  overflow-y: hidden;
  width: 100%;
  cursor: pointer;
  border-radius: 4px;
  position: relative;

  img {
    height: 122px;
    margin-right: 0.25rem;
    border-radius: 4px;
    transition: transform 0.3s ease-in;
    cursor: pointer;
    object-fit: contain;
    min-width: 220px;
  }
`;

const ContentImg = styled.div`
  border: 1px solid;
  margin-right: 5px;
  border-radius: 4px;
`;

const Skeleton = styled.div`
  &:empty {
    width: 220px;
    height: 122px;
    cursor: progress;
    background: linear-gradient(
        0.25turn,
        transparent,
        rgb(93 92 92 / 53%),
        transparent
      ),
      linear-gradient(rgb(93 92 92 / 53%), rgb(93 92 92 / 53%));
    background-repeat: no-repeat;
    background-position: -315px 0, 0 0, 0px 190px, 50px 195px;
    background-color: rgb(93 92 92 / 53%);
    animation: loading 1.5s infinite;
    margin-right: 2px;
    border-radius: 4px;
  }

  @keyframes loading {
    to {
      background-position: 315px 0, 0 0, 0 190px, 50px 195px;
    }
  }
`;
const TitleSection = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    div {
      opacity: 1;
      max-width: 100%;
      right: 100%;
      vertical-align: bottom;
      white-space: nowrap;
      transform: translate(0%);
    }
  }

  div {
    font-size: 0.9vw;
    line-height: 0.8vw;
    max-width: 0;
    opacity: 0;
    color: #54b9c5;
    transform: translate(-100%);
    transition: max-width 1s, opacity 1s, transform 0.75s;
  }
  svg {
    font-size: 0.9vw;
    position: relative;
    top: 1px;
  }
`;

export { ContentRow, Skeleton, ContentImg, BoxContent, TitleSection };
