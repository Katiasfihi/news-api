import React from "react";
import { useState } from "react";

import { SearchInput, articleType } from "../component/search-input";
import { NewsList } from "../component/news-list";

import { Heading } from './styled'

export default function Home(): JSX.Element {
  const [data, setData] = useState<articleType[]>([]);

  return (
    <>
      <Heading data-testid="heading">NEWS API CONDE NAST</Heading>
      <SearchInput setData={setData} />
      <NewsList articles={data} />
    </>
  );
}
