function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function convertToChinese(num) {
  const chineseNum = ['一', '二', '三', '四', '五', '六', '七', '八', '九'];
  
  // Check if num is within 1-9
  if(num >= 1 && num <= 9) {
    return chineseNum[num - 1];
  } else {
    return num;
  }
}

function calculate() {
  const number = document.getElementById('number').value;
  
  if (!isNumber(number)) {
    document.getElementById('result').textContent = "输入错误";
    return;
  };

  let result = (4 * number) / 50;

  result = Math.round(result * 100) / 100;

  result = `今天是疯狂星期${convertToChinese(result)}，v我${number}`;

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