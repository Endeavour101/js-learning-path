function booWho(token) {
  return (typeof token === "boolean") ? true : false;
}

console.log(booWho("false"));