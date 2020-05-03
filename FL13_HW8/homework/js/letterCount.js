function letterCount(name, letter) {
  let result = 0;
  for (let i = 0; i < name.length; i++) {
    if (name[i].toUpperCase() === letter.toUpperCase()) {
      result++;
    }
  }
  return result;
}

letterCount("Maggy", "g");
letterCount("Barry", "b");
letterCount("", "z");
