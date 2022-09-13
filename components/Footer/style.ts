import styled from "styled-components";

const Wrapper = styled.footer`
  color: grey;
  margin: 20px auto 0;
  max-width: 980px;
  padding: 0 4%;
  font-size: 13px;

  .copyright {
    font-size: 11px;
    margin-bottom: 15px;
  }
`;

const ContentLink = styled.div`
  color: #fff;
  a {
    margin-right: 15px;
  }
  svg {
    font-size: 2rem;
  }
`;

const ListFooter = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  font-size: 13px;
  margin: 10px 0 14px;
  padding: 0;

  li {
    flex: 0 0 50%;
    margin-bottom: 16px;

    @media (min-width: 800px) {
      flex: 0 0 25%;
    }
  }
`;

const Button = styled.button`
  color: grey;
  font-size: 13px;
  margin-bottom: 20px;
  padding: 0.5em;
  border: 1px solid;
`;

export { ContentLink, ListFooter, Wrapper, Button };
