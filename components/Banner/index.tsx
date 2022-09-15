import { useEffect, useState } from "react";
import { Movie as MoviesAPI } from "../../pages/api/movies";
import Button from "@mui/material/Button";
import InfoIcon from "@mui/icons-material/Info";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Hero, BannerContent, ContentButton } from "./style";
import { Movie } from "../../types/Movie";

export const Banner = () => {
  const [movies, setMovies] = useState<Movie | any>([]);
  const { original_title, title, backdrop_path, overview } = movies as Movie;

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
    new MoviesAPI()
      .getTrending()
      .then(({ results }) => {
        setMovies(results[Math.floor(Math.random() * results.length - 1)]);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Hero style={BannerImg}>
      <BannerContent>
        <h1>{title || original_title}</h1>
        <p>{truncateText(overview, 200)}</p>
        <ContentButton>
          <Button>
            <PlayArrowIcon />
            Lecture
          </Button>
          <Button>
            <InfoIcon />
            Plus d'infos
          </Button>
        </ContentButton>
      </BannerContent>
    </Hero>
  );
};
