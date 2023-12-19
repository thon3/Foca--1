const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBTn = document.getElementById('new-quote')
const loader = document.getElementById('loader')

function loading (){
    loader.hidden = false
    quoteContainer.hidden = true
}

function complete(){
    if (!loader.hidden){
        quoteContainer.hidden = true
        loader.hidden = true
    }
}
async function getQuote(){
    loading()
    const proxyUrl = 'https://cors- =anywhere.herokuapp.com/'
    const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json'
    try{
        const response = await fetch(proxyUrl + apiUrl)
        const data = await response.json()
        if(data.quoteAuthor === ''){
            authorText.innerText = 'unkown'
        } else {
            authorText.innerText = data.quoteAuthor
        }

        if (data.quoteText.length > 120){
            quoteText.classList.add('longue-quote')
        } else {
            quoteText.classList.remove('long-quote')
        }
        quoteText.innerText = data.quoteText

        complete()
    } catch(error){
        getQuote()
    }
}

function tweetQuote(){
    const quote = quote.innerText
    const author = authorText.innerText
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`
    window.open(twitterUrl, '_blank')
}

newQuoteBTn.addEventListener('click', getQuote)
twitterBtn.addEventListener('click', tweetQuote)


getQuote()