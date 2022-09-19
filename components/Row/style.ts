import styled from "styled-components";
import Devices from "../../helper/Devices";

const ContentRow = styled.div`
  padding-left: 4%;

  h2 {
    font-size: 12px;
    font-weight: 500;
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
    /* width: 40vw; */
    height: 122px;
    margin-right: 0.25rem;
    border-radius: 4px;
    transition: transform 0.3s ease-in;
    cursor: pointer;
    object-fit: contain;
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

export { ContentRow, Skeleton, ContentImg, BoxContent };
