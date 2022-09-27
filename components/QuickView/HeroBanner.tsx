import { FC, useState, useContext } from "react";
import { Button } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CancelIcon from "@mui/icons-material/Cancel";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbsUpDownIcon from "@mui/icons-material/ThumbsUpDown";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { QuickViewContext } from "../../context/QuickViewContext";
import {
  Hero,
  BannerContent,
  ContentButton,
  ContentHero,
  Description,
  ContentAudio,
} from "./style";
import { MovieDetail } from "../../types/Movie";

export const HeroBanner: FC<{ movie: MovieDetail }> = ({ movie }) => {
  const { handleClick, idMovie } = useContext(QuickViewContext);
  const [mute, setMute] = useState(true);
  const { original_title, poster_path, title, backdrop_path } = movie;

  const handleMute = ({}) => {
    mute ? setMute(false) : setMute(true);
  };

  const BannerImg = {
    backgroundImage: `url("${process.env.NEXT_PUBLIC_PATH_IMG}${
      backdrop_path || poster_path
    }")`,
  };

  return (
    <Hero style={BannerImg}>
      <ContentHero>
        <Button className="close" onClick={() => handleClick(idMovie)}>
          <CancelIcon />
        </Button>
        <BannerContent>
          <Description>
            <h1>{title || original_title}</h1>
            <ContentButton>
              <Button className="play">
                <PlayArrowIcon />
                Lecture
              </Button>
              <Button className="more-info">
                <AddCircleIcon />
              </Button>
              <Button>
                <ThumbUpOffAltIcon />
              </Button>
              <Button>
                <ThumbUpOffAltIcon />
                <ThumbsUpDownIcon />
                <ThumbDownOffAltIcon />
              </Button>

              <ContentAudio>
                <Button onClick={handleMute}>
                  {mute ? <VolumeOffIcon /> : <VolumeUpIcon />}
                </Button>
              </ContentAudio>
            </ContentButton>
          </Description>
        </BannerContent>
      </ContentHero>
    </Hero>
  );
};
