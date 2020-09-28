function isUpperCase(str) {
  return str === str.toUpperCase();
}

const caesar = (str, key) => {
  if (key < 0) throw new Error("no negative value is allowed")
  
  let cipherText = "";

  for (let i = 0; i < str.length; i++) {
    if (isUpperCase(str[i])) {
      cipherText += String.fromCharCode(
        ((str.charCodeAt(i) + key - 65) % 26) + 65
      );
    } else {
      cipherText += String.fromCharCode(
        ((str.charCodeAt(i) + key - 97) % 26) + 97
      );
    }
  }
  return cipherText;
};

module.exports = caesar;
