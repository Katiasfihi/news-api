import React from "react";
import { useRouter } from "next/router";

import {
  PageHero,
  HeroWrapper,
  HeroDescription,
  Title,
  HorizontalLine,
  SecondaryTitle,
  PageTitle,
  ArticleText,
} from "./styled";

const NewsArticlePage = () => {
  const router = useRouter();
  const { query: article } = router;

  const { author, title, description, urlToImage, publishedAt, content } =
    article;

  console.log(content);
  return (
    <>
      <PageTitle data-testid="title">NEWS API CONDE NAST</PageTitle>
      <HeroWrapper>
        <PageHero urlToImage={`${urlToImage}`} />
        <HeroDescription>
          <Title>{title}</Title>
          <HorizontalLine />
          <SecondaryTitle>By {author}</SecondaryTitle>
          <SecondaryTitle>{publishedAt}</SecondaryTitle>
        </HeroDescription>
        <ArticleText>
          {description}
          <br></br>
          <br></br>
          {content}
        </ArticleText>
      </HeroWrapper>
    </>
  );
};

export default NewsArticlePage;
