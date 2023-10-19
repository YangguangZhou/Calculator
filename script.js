document.getElementById('executeButton').addEventListener('click', function() {
    var command = document.getElementById('commandInput').value;
    var resultDiv = document.getElementById('result');

    try {
        var result;
        if (command.includes('^')) {
            // 包含指数操作
            var parts = command.split('^');
            result = power(parseFloat(parts[0]), parseFloat(parts[1]));
        } else if (command.includes('√')) {
            // 包含根号操作
            var parts = command.split('√');
            result = nthRoot(parseFloat(parts[0]), parseFloat(parts[1]));
        } else if (command.includes('log')) {
            // 包含对数操作
            var parts = command.split(' ');
            result = logarithm(parseFloat(parts[1]), parseFloat(parts[2]));
        } else if (command.includes('factorize')) {
            // 因式分解操作
            var number = parseFloat(command.split(' ')[1]);
            result = factorize(number).join(' * ');
        } else {
            // 默认按照算术表达式处理
            result = eval(command);
        }

        resultDiv.innerHTML = '结果：' + result;
    } catch (error) {
        resultDiv.innerHTML = '输入无效';
    }
});
