function truncateString (text, number) {
  let stringLength = text.length;
  if ( stringLength > number) {
    return `${text.slice(0, number)}...`;
  } else {
    return text;
  }
}

console.log(truncateString ("Absolutely Longer", 2));