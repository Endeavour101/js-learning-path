let count = 0;
function cardCounter(card) {
  if (card >= 2 && card <= 6) {
    ++count;
  } else if (card == 10 
      || card == "J"
      || card == "Q"
      || card == "K"
      || card == "A") {
    --count;
  }
  if (count > 0){
    return `${count} Bet`;
  } else {
    return `${count} Hold`;
  }
}

cardCounter(10);
cardCounter("J");
cardCounter("Q");
cardCounter("K");
console.log(cardCounter("A"));

//After the cards 10, "J", "Q", "K", then calling cardCounter("A") should return the string -5 Hold.