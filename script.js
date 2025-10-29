const quote = document.getElementById('quote');
const author = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');
const copyBtn = document.getElementById('copy');

async function getQuote() {
  const response = await fetch('https://type.fit/api/quotes');
  const data = await response.json();
  const random = data[Math.floor(Math.random() * data.length)];
  quote.innerText = `"${random.text}"`;
  author.innerText = random.author ? `– ${random.author}` : '- Unknown';
}

newQuoteBtn.addEventListener('click', getQuote);

copyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(`${quote.innerText} ${author.innerText}`);
  alert('Quote copied to clipboard!');
});
