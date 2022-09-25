import { useEffect, useState, useContext } from "react";
import { Movie as MovieAPI } from "../../pages/api/movies";
import { useRouter } from "next/router";
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
import { QuickView } from "../QuickView";
import { QuickViewContext } from "../../context/QuickViewContext";
import { Movie } from "../../types/Movie";

export const Banner = () => {
  const [movie, setMovie] = useState<Movie | any>([]);
  const { handleClick } = useContext(QuickViewContext);
  const { original_title, title, backdrop_path, overview, id } = movie as Movie;

  const truncateText = (string: string, nb: number) => {
    const text = string;
    return text?.length > nb
      ? text.slice(0, nb - 1) + "..."
      : "Pas description";
  };

  const BannerImg = {
    backgroundImage: `url("${process.env.NEXT_PUBLIC_PATH_IMG}${backdrop_path}")`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };

  useEffect(() => {
    new MovieAPI()
      .getTrending()
      .then(({ results }) => {
        setMovie(results[Math.floor(Math.random() * results.length - 1)]);
      })
      .catch((err) => console.log(err));
  }, []);

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
        <QuickView id={id} />
      </ContentHero>
    </Hero>
  );
};
