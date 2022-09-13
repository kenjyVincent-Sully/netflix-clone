import React from "react";
import { SocialNetwork } from "./SocialNetwork";
import { MembreLinks } from "./MembreLinks";
import { Wrapper, Button } from "./style";

export const Footer = () => {
  return (
    <Wrapper>
      <SocialNetwork />
      <MembreLinks />
      <Button>Code de Service</Button>
      <div className="copyright">
        <span>&copy; Nexflix Clone</span>
      </div>
    </Wrapper>
  );
};
