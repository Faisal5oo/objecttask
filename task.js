const countRepeatedCharacters = (str) => {
  const charCount = {};
  const repeatedChars = {};

  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);

    if (charCount[char] && !repeatedChars[char]) {
      charCount[char]++;
      repeatedChars[char] = charCount[char];
    } else {
      charCount[char] = 1;
    }
  }

  return repeatedChars;
};

module.exports = {
  countRepeatedCharacters,
};
