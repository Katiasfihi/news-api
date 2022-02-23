import styled from "styled-components";

export const PageHero = styled.div`
  width: 100%;
  height: 32rem;
  background-image: linear-gradient(
      to bottom,
      rgba(245, 246, 252, 0.52),
      rgba(78 77 78 / 73%)
    ),
    url(${(props) => props.urlToImage});
  background-size: cover;
  background-position: center;
`;

export const HeroWrapper = styled.div`
  position: relative;
`;

export const HeroDescription = styled.div`
  position: absolute;
  top: 15rem;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 56px;
  color: white;
`;

export const HorizontalLine = styled.hr`
  width: 10rem;
  border: 1px solid red;
`;

export const SecondaryTitle = styled.p`
  text-transform: uppercase;
  font-style: normal;
  letter-spacing: 0.166667em;
  line-break: auto;
  line-height: 1.33333em;
  font-size: 12px;
  font-weight: 300;
  color: rgb(242, 242, 242);
`;

export const PageTitle = styled.h1`
  font-size: 47px;
  text-transform: uppercase;
  font-style: normal;
  letter-spacing: 0.12em;
  line-break: auto;
  line-height: 1.3em;
  font-weight: 300;
  color: black;
  text-align: center;
`;

export const ArticleText = styled.div`
  margin: 5rem 10rem 0 10rem;
  font-family: Georgia, serif;
  line-height: 2rem;
  font-size: 20px;
`;
