function getQuote() {
  let arr = this.quotes.split("*");
  /* inspect in console & debug... */
  arr = arr.map(e => e.trim());
  // console.log(arr) // to see why this line needed
  arr = arr.map((e, i) => (i % 2 == 0 ? e.substring(0, e.indexOf("\n")) : e));
  // console.log(arr);

  // pick random quote
  let numquotes = (arr.length - 1) / 2;
  let i = 2 * Math.floor(Math.random() * numquotes) + 1;

  // update DOM
  document.getElementById("quote").innerHTML = arr[i];
  document.getElementById("author").innerHTML = arr[i + 1];
}
// quotes preprocessed by replacing all "..." with *...*
window.onload = getQuote;
