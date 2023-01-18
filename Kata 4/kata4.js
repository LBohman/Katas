const chars = {'a': 1, 'e' : 2, 'i': 3, 'o': 4, 'u': 5}

function replaceVowel(string) {
  const lowercase = string.toLowerCase();
  const re = lowercase.replace(/[aeiou]/g, i => chars[i]);
  console.log(re);
}

replaceVowel("karAchi");  // "k1r1ch3"
replaceVowel("chEmBur"); // "ch2mb5r"
replaceVowel("khandbari"); // "kh1ndb1r3"
replaceVowel("LexiCAl"); // "l2x3c1l"
replaceVowel("fuNctionS"); // "f5nct34ns"
replaceVowel("EASY"); // "21sy"
