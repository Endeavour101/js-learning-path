function confirmEnding (text, textEnd) {
  const textEndLength = textEnd.length;
  const textTargetSlice = text.slice(text.length - textEndLength);
  if (textEnd == textTargetSlice) {
    return true;
  } else {
    return false;
  }
}

console.log(confirmEnding( "Abstraction", "action" ));