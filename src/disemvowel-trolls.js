function disemvowel(sentence) {
  return sentence.replaceAll(/[aeiouAEIOU]/g, '');
}

module.exports = disemvowel;
