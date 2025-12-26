function firstNonRepeatedChar(str) {
  if (!str) return null;

  const count = {};

  // Count frequency of each character
  for (let ch of str) {
    count[ch] = (count[ch] || 0) + 1;
  }

  // Find first character with frequency 1
  for (let ch of str) {
    if (count[ch] === 1) {
      return ch;
    }
  }

  return null;
}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));
