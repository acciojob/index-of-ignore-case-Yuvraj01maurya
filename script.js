function indexOfIgnoreCase(s1, s2) {
  // write your code here

  const lowerStr = s1.toLowerCase();
  const lowerSubStr = s2.toLowerCase();
  // Find the index of the first occurrence of the lowercase subStr in the lowercase str
  const index = lowerStr.indexOf(lowerSubStr);
  // If the index is -1, it means the subStr is not found in the str
  if (index === -1) {
    return -1;
  }
  // Return the original index of the first occurrence of subStr in str
  return index;
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
