import { FC } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Typography from "@mui/material/Typography";
import { Movie } from "../../types/Movie";
import { SimilarMoviesContent } from "./style";
import { truncateText } from "../../helper/Text";

export const SimilarMovies: FC<{ similarMovies: Movie[] }> = ({
  similarMovies,
}) => {
  return (
    <SimilarMoviesContent>
      <h2>Titre Similaires </h2>
      <div className="content-card">
        {similarMovies.map((movie) => {
          const {
            title,
            original_title,
            overview,
            release_date,
            backdrop_path,
          } = movie;
          const date = new Date(`${release_date}`);
          return (
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={`${process.env.NEXT_PUBLIC_PATH_IMG}${backdrop_path}`}
                alt={`${title || original_title}`}
              />
              <CardContent>
                <div className="btn-content">
                  <Typography gutterBottom variant="h5" component="div">
                    {date.getFullYear()}
                    <Button>
                      <AddCircleIcon />
                    </Button>
                  </Typography>
                </div>

                <Typography variant="body2" color="text.secondary">
                  {truncateText(overview, 150)}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </SimilarMoviesContent>
  );
};
