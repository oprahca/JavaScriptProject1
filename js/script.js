/******************************************
 * 300337817 Oprah Huang 
 * CSIS 3380 Project 1 Random Quote Generator
*****************************************/

/*** 
 * `quotes` array 
***/
// create a variable for an array with object of properties and value
const quotes = [ 
    {
        quote: "Always deliver more than expected.",
        source: "Larry Page",
        citation: "LinkedIn",
        year: 2014
    }, {
        quote: "Make every detail perfect and limit the number of details to perfect.",
        source: "Jack Dorsey",
        citation: "Twitter",
        year: 2010
    }, {
        quote: "It's not about ideas. It's about making ideas happen.",
        source: "Scott Belsky",
        citation: "Website",
        year: 2012
    }, {
        quote: "Don't play games that you don't understand, even if you see lots of other people making money from them.",
        source: "Tony Hsieh",
        citation: "Instagram",
        year: 2018
    }, {
        quote: "Design isn't just what it looks like and feels like. Design is how it works.",
        source: "Steve Jobs",
        citation: "Apple",
    }, {
        quote: "When you find an idea that you just cannot stop thinking about, that's probably a good one to pursue.",
        source: "Josh James", 
        citation: "Website",
    }, {
        quote: "Anything that is measured and watched, improves.",
        source: "Bob Parsons",
        citation: "Twitter"
    }, {
        quote: "Don't be embarrassed by your failures, learn from them and start again.",
        source: "Richard Branson",
        citation: "Pinterest"
    }];

/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
    // create a variable for random number between zero and length of quotes array
    const randomIndex = Math.floor(Math.random() * (quotes.length));
    // use random number varaible to grab random object from quotes and store it in variable
    let randomNumber = quotes[randomIndex];
    //return randon quote
    return randomNumber; 
}


/***
 * `printQuote` function
***/
function printQuote() {
    // call getRandimQuote function to get random quote object
    let randomquote = getRandomQuote();
    // create a string of HTML with quote properties to display the random quote
    let html = `<p class='quote'>${randomquote.quote}</p>`;
    html += `<p class='source'>${randomquote.source}`;
    // if the quote property exist, add the string of HTML to print
    if (randomquote.citation) {
        html += `<span class='citation'>${randomquote.citation}</span>`;
    };
    // if the quote property exist, add the string of HTML to print
    if (randomquote.year) {
        html += `<span class='year'>${randomquote.year}</span>`;
    };
    // add the </p> closed tag
    html += `</p>`;
    // get the id quote-box div, print the whole HTML string
    return document.getElementById('quote-box').innerHTML = html;
  }


/***
 * click event listener for the print quote button
 * The code will look like the following. You need to complete it.
***/
// when user click the button to display function
document.getElementById('load-quote').addEventListener("click", printQuote, false);