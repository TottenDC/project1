// FSJS - Random Quote Generator
/*
Random Quote Generator Program by Daniel Totten
*/

// create updatable array of quote objects
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
    episode: 'Season 5, Episode 14',
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
    episode: 'Season 1, Episode 4',
    year: 2003
  },
  {
    quote: 'It\'s easy to do nothing, it\'s hard to forgive.',
    source: 'Aang (Zach Tyler Eisen)',
    citation: 'Avatar: The Last Airbender',
    episode: 'Season 3, Episode 16',
    year: 2008
  },
  {
    quote: 'Life happens wherever you are, whether you make it or not.',
    source: 'Iroh (Mako Iwamatsu)',
    citation: 'Avatar: The Last Airbender',
    episode: 'Season 2, Episode 14',
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
// create an empty timer variable that will be used for auto-updating the page after pressing the button
var timer;

/*
getRandomQuote function
1. creates a random number to access an index value in quotes array
2. returns the object at a random index position
*/
function getRandomQuote(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

/*
randomBackgroundColor Function
1. create function to return random value from 0-255
2. create random red, green, and blue values using the random value Function
3. create rgb(#,#,#) string
4. access button element to change CSS
5. ask if the color combination is getting too close to white. If it is, set text to black.
6. if not, set background and button color to new, random string
*/
function randomColorValue() {
  return Math.floor(Math.random() * 256);
}
function randomBackgroundColor() {
  var red = randomColorValue();
  var green = randomColorValue();
  var blue = randomColorValue();

  var colorString = 'rgb(' + red + ',' + green + ',' + blue + ')';
  var buttonElem = document.getElementById('loadQuote');

  if (red >=150 && blue >= 150 && green >= 150) {
    document.body.style.color = 'black';
    document.body.style.backgroundColor = colorString;
    buttonElem.style.backgroundColor = colorString;
  } else {
    document.body.style.color = 'white';
    document.body.style.backgroundColor = colorString;
    buttonElem.style.backgroundColor = colorString;
  }
}

/*
printQuote Function
1. generates named object that holds a randomly-generated object from the quotes array
2. builds an html string to add into the quote-box on the page
2a. conditionals check for extra properties in the object and adds to the string
3. prints string to the page in the div element
4. changes the background and button color
5. clears the previous timer interval (if present), then starts new timer interval (10 seconds)
*/
function printQuote() {
  var quote = getRandomQuote(quotes);

  var quotePropertiesToPrint = '<p class="quote">' + quote.quote + '</p>';
  quotePropertiesToPrint += '<p class="source">' + quote.source;
  if ( quote.citation ) {
    quotePropertiesToPrint += '<span class="citation">' + quote.citation + '</span>';
  }
  if ( quote.episode ) {
    quotePropertiesToPrint += '<span class="episode">' + quote.episode + '</span>';
  }
  if ( quote.year ) {
    quotePropertiesToPrint += '<span class="year">' + quote.year +'</span>';
  }
  quotePropertiesToPrint += '</p>';

  document.getElementById('quote-box').innerHTML = quotePropertiesToPrint;
  randomBackgroundColor();

  clearInterval(timer);
  timer = window.setInterval(printQuote, 10000);

}


// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
