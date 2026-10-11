function pyramid(patternCharacter, lines, isVertexDown) {
  let displayedStartSymbolsProLineUp = 1;
  let displayedStartSymbolsProLineDown = lines * 2 - 1;
  let maxFillerSpaces = lines - 1;
  let minFillerSpaces = 0;
  if (!isVertexDown) {
    let bricks = "\n";
    for (let line = 0; line < lines; line++) {
      bricks +=
        " ".repeat(maxFillerSpaces) +
        patternCharacter.repeat(displayedStartSymbolsProLineUp) +
        "\n";
      //console.log(bricks);
      maxFillerSpaces--;
      displayedStartSymbolsProLineUp += 2;
    }
    return bricks;
  } else {
    let bricks = "\n";
    for (let line = lines; line > 0; line--) {
      bricks +=
        " ".repeat(minFillerSpaces) +
        patternCharacter.repeat(displayedStartSymbolsProLineDown) +
        "\n";
      //console.log(bricks);
      minFillerSpaces++;
      displayedStartSymbolsProLineDown -= 2;
    }
    return bricks;
  }
}

console.log(pyramid("o", 4, false));
console.log(pyramid("p", 5, true));
