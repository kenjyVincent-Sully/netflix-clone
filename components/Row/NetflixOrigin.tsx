import { FC } from "react";
import { Tv } from "../../types/Movie";
import { Item } from "./Item";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { TitleSection } from "./style";

export const NetflixOrigin: FC<{ movies: Tv[] }> = ({ movies }) => {
  return (
    <div>
      <TitleSection>
        <h2>Seulement sur Netflix</h2>
        <div>
          Tout explorer
          <ArrowForwardIosIcon />
        </div>
      </TitleSection>

      <Item movies={movies} isLoading />
    </div>
  );
};
