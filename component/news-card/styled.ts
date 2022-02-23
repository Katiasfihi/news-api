import styled from "styled-components";

export const ListItem = styled.li`
  margin: 2rem;
  list-style: none;
  width: 20rem;
`;

export const CardHero = styled.div`
  width: 20rem;
  height: 20rem;
  background-image: url(${(props) => props.urlToImage});
  background-size: cover;
  background-position: center;
  cursor: pointer;
`;

export const CardTitle = styled.h3`
  cursor: pointer;
  font-family: DomaineDisplay, Georgia, serif;
  font-style: normal;
  letter-spacing: normal;
  line-height: 1.23077em;
  font-size: 26px;
  font-weight: 400;
`;

export const CardAuthor = styled.p`
  text-transform: uppercase;
  font-family: GTWalsheimPro, helvetica, sans-serif;
  font-feature-settings: normal;
  font-style: normal;
  letter-spacing: 0.17rem;
  line-break: auto;
  line-height: 1rem;
  font-size: 12px;
  font-weight: 300;
`;

export const CardPublishedAt = styled.time`
  text-transform: uppercase;
  font-family: GTWalsheimPro, helvetica, sans-serif;
  font-feature-settings: normal;
  font-style: normal;
  letter-spacing: 0.2rem;
  line-break: auto;
  line-height: 1rem;
  font-size: 12px;
  font-weight: 300;
  color: rgb(108, 110, 112);
`;

