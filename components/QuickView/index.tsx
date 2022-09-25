import { useContext, useState, useEffect, FC } from "react";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
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
import { Movie as MovieAPI } from "../../pages/api/movies";
import { Movie } from "../../types/Movie";

export const QuickView: FC<{ id: number }> = ({ id }) => {
  const [mute, setMute] = useState(true);
  const { handleClick, open } = useContext(QuickViewContext);
  const router = useRouter();

  const handleMute = () => {
    mute ? setMute(true) : setMute(false);
  };

  return (
    <Dialog
      open={open}
      onClose={() => router.push("/")}
      maxWidth="lg"
      scroll="body"
    >
      <Hero>
        <ContentHero>
          <Button className="close" onClick={() => handleClick(id)}>
            <CancelIcon />
          </Button>
          <BannerContent>
            <Description>
              <h1>titre</h1>
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
                    {mute ? <VolumeUpIcon /> : <VolumeOffIcon />}
                  </Button>
                </ContentAudio>
              </ContentButton>
            </Description>
          </BannerContent>
        </ContentHero>
      </Hero>

      <DialogContent>
        <DialogContentText>
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};
