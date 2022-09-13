import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { ContentLink } from "./style";

export const SocialNetwork = () => {
  return (
    <ContentLink>
      <a href="/facebook" target="_blank">
        <FacebookIcon />
      </a>
      <a href="/insta" target="_blank">
        <InstagramIcon />
      </a>
      <a href="/twitter" target="_blank">
        <TwitterIcon />
      </a>
      <a href="/youtube" target="_blank">
        <YouTubeIcon />
      </a>
    </ContentLink>
  );
};
