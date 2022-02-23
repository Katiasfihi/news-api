import React from 'react';
import { render } from '@testing-library/react';
import { NewsCard } from './Index'

const mockedArticle = {
  source: {
    id: null,
    name: "Motley Fool",
  },
  author: "newsfeedback@fool.com (Travis Hoium)",
  title: "Why Solana, Chainlink, and Ethereum Plunged Today",
  description: "Russia and Canada aren't helping crypto values today.",
  url: "https://www.fool.com/investing/2022/02/22/why-solana-chainlink-and-ethereum-plunged-today/",
  urlToImage:
    "https://g.foolcdn.com/editorial/images/667251/currency-and-crypto-digitization.jpg",
  publishedAt: "2022-02-22T20:27:13Z",
  content:
    "What happened \r\nAfter a rough weekend, the trading week didn't start off well, with most cryptocurrencies dropping early in trading on Tuesday. Macro tensions with Russia continue to be a hot topic, … [+2551 chars]",
};

test('it renders the card component', () => {
    const { getByTestId } = render(<NewsCard key='1' article={mockedArticle}/>)
    expect(getByTestId('new-card')).toBeDefined()
})
test('it renders the Author and the title', () => {
    const { getByText } = render(<NewsCard key='1' article={mockedArticle}/>)
    expect(getByText('Why Solana, Chainlink, and Ethereum Plunged Today')).toBeDefined()
    expect(getByText('By newsfeedback@fool.com (Travis Hoium)')).toBeDefined()
})