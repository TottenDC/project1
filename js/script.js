// FSJS - Random Quote Generator
/*
Random Quote Generator Program by Daniel Totten
*/

// Create the array of quote objects and name it quotes
var quotes = [
  {
    quote: 'As far as I\'m concerned, if something is so complicated that you can\'t explain it in 10 seconds, then it\'s probably not worth knowing anyway.',
    source: 'Bill Waterson',
    citation: 'The Indispensable Calivn and Hobbes',
    year: 1992
  },
  {
    quote: 'People waste their time pondering whether the glass is half empty or half full. Me? I just drink whatever\'s in the glass.',
    source: 'Sophia Petrillo (Estelle Getty)',
    citation: 'The Golden Girls',
    year: 1990
  },
  {
    quote: 'Man is least himself when he talks in his own person. Give him a mask, and he will tell you the truth.',
    source: 'Oscar Wilde',
    citation: '"The True Function and Value of Criticism"',
    year: 1890
  },
  {
    quote: 'The thing is - fear can\'t hurt you any more than a dream.',
    source: 'William Golding',
    citation: 'Lord of the Flies',
    year: 1954
  },
  {
    quote: 'Words can be like X-rays if you use them properly -- they\'ll go through anything. You read and you\'re pierced.',
    source: 'Aldous Huxley',
    citation: 'Brave New World',
    year: 1932
  },
  {
    quote: 'If that\'s a veiled criticism about me, I won\'t hear it and I won\'t respond to it.',
    source: 'Lucille Bluth (Jessica Walter)',
    citation: 'Arrested Development',
    year: 2003
  },
  {
    quote: 'It\'s easy to do nothing, it\'s hard to forgive.',
    source: 'Aang (Zach Tyler Eisen)',
    citation: 'Avatar: The Last Airbender',
    year: 2008
  },
  {
    quote: 'Life happens wherever you are, whether you make it or not.',
    source: 'Iroh (Mako Iwamatsu)',
    citation: 'Avatar: The Last Airbender',
    year: 2006
  },
  {
    quote: 'We all make choices, but in the end, our choices make us.',
    source: 'Andrew Ryan (Armin Shimerman)',
    citation: 'BioShock',
    year: 2007
  },
  {
    quote: 'Time... Time rots everything. Even hope.',
    source: 'Elizabeth DeWitt Comstock (Courtnee Draper)',
    citation: 'BioShock Infinite',
    year: 2013
  }
];

// Create the getRandomQuote function
/*
getRandomQuote function
1. creates a random number to access an index value in quotes array
2. returns the object at a random index position
*/
function getRandomQuote(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

// Create the printQuote funtion
function printQuote() {
  var quote = getRandomQuote(quotes);
  var quotePropertiesToPrint = '<p class="quote">' + quote.quote + '</p>';
  quotePropertiesToPrint += '<p class="source">' + quote.source;
  if ( quote.citation !== ' ' ) {
    quotePropertiesToPrint += '<span class="citation">' + quote.citation + '</span>';
  }
  if ( quote.year !== ' ' ) {
    quotePropertiesToPrint += '<span class="year">' + quote.year +'</span>';
  }
  quotePropertiesToPrint += '</p>'
  document.getElementById('quote-box').innerHTML = quotePropertiesToPrint;
}


// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
