import { FC, useContext } from "react";
import Button from "@mui/material/Button";
import InfoIcon from "@mui/icons-material/Info";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import {
  Hero,
  BannerContent,
  ContentButton,
  ContentHero,
  Description,
} from "./style";
import { QuickViewContext } from "../../context/QuickViewContext";
import { Movie, Tv } from "../../types/Movie";
import { truncateText } from "../../helper/Text";

export const Banner: FC<{ movie: Movie }> = ({ movie }) => {
  const { handleClick } = useContext(QuickViewContext);
  const { original_title, title, backdrop_path, overview, id } = movie as Movie;

  const BannerImg = {
    backgroundImage: `url("${process.env.NEXT_PUBLIC_PATH_IMG}${backdrop_path}")`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };

  return (
    <Hero style={BannerImg}>
      <ContentHero>
        <BannerContent>
          <Description>
            <h1>{title || original_title}</h1>
            <p>{truncateText(overview, 200)}</p>
            <ContentButton>
              <Button>
                <PlayArrowIcon />
                Lecture
              </Button>
              <Button onClick={() => handleClick(id)}>
                <InfoIcon />
                Plus d'infos
              </Button>
            </ContentButton>
          </Description>
        </BannerContent>
      </ContentHero>
    </Hero>
  );
};
