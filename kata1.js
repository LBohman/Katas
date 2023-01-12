let input = "hA2p4Py";

function rearrange(string) {
  let numbers = [];
  let upperCase = [];
  let lowerCase = [];
  
  for (let i = 0; i < string.length; i++) {
    if (string[i] == parseInt(string[i])) {
      numbers.push(string[i]);
      
    } else {
      if (string[i] == string[i].toUpperCase()) {
        upperCase.push(string[i]);
        
      }
      if (string[i] == string[i].toLowerCase()) {
        lowerCase.push(string[i]);
        
      }
    }
  }
  
  let combinedArray = upperCase.concat(lowerCase, numbers);
  let sortedString = combinedArray.join('');
  return sortedString;
}

console.log(rearrange(input));
