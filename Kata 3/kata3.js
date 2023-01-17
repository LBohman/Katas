
function bestFriend(string, a, b) {
  const characters = Array.from(string);
  
  for (let i = 0; i < characters.length - 1; i++) {
    if (characters[i] === a && !(characters[i + 1] === b)) {
      console.log(false);
      return false;
    }
  }
  console.log(true);
  return true;
}

bestFriend("he headed to the store", "h", "e");
bestFriend("i found an ounce with my hound", "o", "u");
bestFriend("we found your dynamite", "d", "y");