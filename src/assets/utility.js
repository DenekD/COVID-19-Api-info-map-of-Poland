export const regionsLetterFormat = (word) => {
  word = word.replace("ę", "e");
  word = word.replace("ó", "o");
  word = word.replace("ą", "a");
  word = word.replace("ś", "s");
  word = word.replace("ł", "l");
  word = word.replace("ż", "z");
  word = word.replace("ź", "z");
  word = word.replace("ć", "c");
  word = word.replace("ń", "n");
  return word;
}