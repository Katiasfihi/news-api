import Link from "next/link";
import {
  ListItem,
  CardHero,
  CardTitle,
  CardAuthor,
  CardPublishedAt,
} from "./styled";

const NewsCard = ({ article }): JSX.Element => {
  const { author, title, urlToImage } = article;
  const dateFormat: string = article.publishedAt.slice(0, 10);

  return (
    // eslint-disable-next-line @next/next/link-passhref
    <Link
      href={{
        pathname: "/news-article-page",
        query: { ...article, publishedAt: dateFormat },
      }}
    >
      <ListItem data-testid="new-card">
        <CardHero urlToImage={`${urlToImage}`} />
        <CardTitle>{title}</CardTitle>
        <hr></hr>
        <CardAuthor>By {author}</CardAuthor>
        <CardPublishedAt>{dateFormat}</CardPublishedAt>
      </ListItem>
    </Link>
  );
};

export default NewsCard;
