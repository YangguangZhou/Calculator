function convertToChinese(num) {
  const chineseNum = ['一', '二', '三', '四', '五', '六', '七', '八', '九'];
  return chineseNum[num - 1];
}

function calculate() {
  const number = document.getElementById('number').value;
  let result = 4/50 * number;

  result = Math.round(result * 100) / 100; // Rounding to 2 decimal places

  if (result >= 1 && result <= 9) {
    result = `今天是疯狂星期${convertToChinese(result)}，v我${number}`;
  } else {
    result = `今天是疯狂星期${result}，v我${number}`;
  }

  document.getElementById('result').textContent = result;
}

function copyResult() {
  var copyText = document.getElementById("result");
  var textArea = document.createElement("textarea");
  textArea.value = copyText.textContent;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("Copy");
  textArea.remove();
}