function checkWords() {
  let string = document.getElementById("words").value;
  let countA = 0;
  let countB = 0;
  let countWord = 1;

  for (let i = 0; i < string.length; i++) {
    if (
      string[i] == "а" ||
      string[i] == "А" ||
      string[i] == "е" ||
      string[i] == "Е" ||
      string[i] == "ё" ||
      string[i] == "Ё" ||
      string[i] == "и" ||
      string[i] == "И" ||
      string[i] == "о" ||
      string[i] == "О" ||
      string[i] == "у" ||
      string[i] == "У" ||
      string[i] == "ы" ||
      string[i] == "Ы" ||
      string[i] == "ю" ||
      string[i] == "Ю" ||
      string[i] == "я" ||
      string[i] == "Я" ||
      string[i] == "э" ||
      string[i] == "Э"
    )
      countA++;
    else if (String(string[i]).match(/[а-я]/i)) countB++;
    if (string[i] == " " && String(string[i - 1]).match(/[а-я,.]/i))
      countWord++;
  }
  document.getElementById("glasnyCount").innerText = countA;
  document.getElementById("soglasnyCount").innerText = countB;
}
