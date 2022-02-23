import { useState, useEffect } from "react";

import { Search, SearchBar, Input } from "./styled";

type sourceType = { id: null | string; name: string };

export type articleType = {
  author: string;
  content: string;
  description: string;
  source: sourceType;
  title: string;
  url: string;
  urlToImage: string;
};

type responseType = {
  articles: articleType[];
  status: string;
  totalResults: number;
};

export const SearchInput = ({ setData }): JSX.Element => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [searchKeyWord, setSearchKeyWord] = useState<string>(""); 

  const apiKey = "9b736b6d89b3447a92e85b9ce3392d55";
  const url = "https://newsapi.org/v2/";
  const urlLatestArticles = searchKeyWord
    ? `${url}everything?q=${searchKeyWord}&from=2022-02-20&sortBy=publishedAt&apiKey=${apiKey}`
    : `${url}top-headlines?country=us&apiKey=${apiKey}`;

  const getInformation = async () => {
    const response = await fetch(urlLatestArticles);
    const data: responseType = await response.json();
    window.localStorage.setItem("newsApiResponse", JSON.stringify(data)); 
    setData(data.articles); 
  };

  useEffect(() => {
    const cachedNewsApiUrl: string = window.localStorage.getItem("newsApiUrl");
    if (cachedNewsApiUrl !== urlLatestArticles) {
      window.localStorage.setItem("newsApiUrl", urlLatestArticles);
      getInformation();
    } else {
      const cachedData = window.localStorage.getItem("newsApiResponse");
      const paresedCache = JSON.parse(cachedData);
      console.log("paresedCache ", paresedCache);
      setData(paresedCache.articles); 
    }
  }, [urlLatestArticles]);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchKeyWord(searchInput);
  };

  return (
    <SearchBar onSubmit={handleSubmit}>
      <Search htmlFor="search" data-testid="search">
        Search:
      </Search>
      <Input type="text" id="search" name="search" onChange={handleChange} />
    </SearchBar>
  );
};
