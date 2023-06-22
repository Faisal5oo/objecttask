const countRepeatedCharacters = (str) => {
  const charCount = {};
  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  const repeatedChars = {};
  for (const char in charCount) {
    if (charCount[char] > 1) {
      repeatedChars[char] = charCount[char];
    }
  }

  return repeatedChars;
};

// Example usage

module.exports = {
  countRepeatedCharacters,
};
