const quotes = [
  {
    quote: '공부하다 죽어라',
    author: '혜암 스님',
  },
  {
    quote:
      'Computers are incredibly fast, accurate, and stupid. Human beings are incredibly slow, inaccurate, and brilliant. Together they are powerful beyond imagination.',
    author: 'Albert Einstein',
  },
  {
    quote:
      'If you can’t explain it simply, you don’t understand it well enough',
    author: 'Albert Einstein',
  },
  {
    quote: 'There is only one meaning of life: the act of living itself.',
    author: 'Erich Fromm',
  },
  {
    quote: 'Nothing is more despicable than respect based on fear.',
    author: 'Albert Camus',
  },
  {
    quote: 'Never underestimate your own ignorance.',
    author: 'Albert Einstein',
  },
  {
    quote:
      'Try not to become a man of success but rather try to become a man of value.',
    author: 'Albert Einstein',
  },
  {
    quote: "Don't Study. Start Making.",
    author: 'Nomad Coders',
  },
  {
    quote: '인생의 헛된 것은 없다. 모든 경험은 하나의 양식이 되기 떄문이다.',
    author: '마야모토 시게루',
  },
  {
    quote: 'CHINA!!!!!!!!',
    author: 'Donald John Trump',
  },
];

const quote = document.querySelector('#quote p:first-child');
const author = document.querySelector('#quote p:last-child');
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
