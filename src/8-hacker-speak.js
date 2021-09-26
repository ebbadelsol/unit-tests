export const hackerSpeak = (words) => {
  return words
    .replace(/a/g, "4")
    .replace(/e/g, "3")
    .replace(/i/g, "1")
    .replace(/o/g, "0")
    .replace(/s/g, "5")
    .replace(/A/g, "4")
    .replace(/E/g, "3")
    .replace(/I/g, "1")
    .replace(/O/g, "0")
    .replace(/S/g, "5");
};

// There must be a shorter/easier way of doing this for capital and lower case letters

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace

// https://www.tutorialrepublic.com/faq/how-to-replace-character-inside-a-string-in-javascript.php
