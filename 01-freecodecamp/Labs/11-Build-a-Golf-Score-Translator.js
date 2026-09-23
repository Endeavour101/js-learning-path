const names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!",
];
function golfScore(parNum, strokesNum) {
  if (strokesNum == 1) {
    return names[0];
  } else if (strokesNum <= parNum - 2) {
    return names[1];
  } else if (strokesNum == parNum - 1) {
    return names[2];
  } else if (strokesNum == parNum) {
    return names[3];
  } else if (strokesNum == parNum + 1) {
    return names[4];
  } else if (strokesNum == parNum + 2) {
    return names[5];
  } else if (strokesNum >= parNum + 3) {
    return names[6];
  }
}
