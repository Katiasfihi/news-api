
import NewsCard from "../news-card/NewsCard";

import { UnorderedList } from './styled'

const NewsList = ({ articles }): JSX.Element => {
  if (!articles) {
    return <h1>Loading...</h1>;
  }

  return (
    <UnorderedList>
      {articles.map((article, index) => {
        return (
          <NewsCard key={index} article={article} />
        );
      })}
    </UnorderedList>
  );
};

export default NewsList;
