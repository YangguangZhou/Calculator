function calculate() {
    var expression = document.getElementById('expression').value;
    var OriginalExpression = expression;
    var result;

    // 处理convert函数
    expression = expression.replace(/convert\((\d+),(\d+),(\d+)\)/g, function (match, fromBase, toBase, number) {
        var decimalNumber = parseInt(number, parseInt(fromBase, 10));
        return decimalNumber.toString(parseInt(toBase, 10));
    });

    // 处理数字，确保它们被当作十进制数字来处理
    expression = expression.replace(/\b\d+\b/g, function (match) {
        return parseInt(match, 10);
    });

    // 添加对n次方的处理
    expression = expression.replace(/\^/g, '**');

    // 添加对n次方根的处理
    expression = expression.replace(/√(\d+)/g, 'Math.sqrt($1)');

    // 添加对对数的处理
    expression = expression.replace(/log\((\d+),(\d+)\)/g, 'Math.log($2) / Math.log($1)');

    // 添加对进制转换的处理
    expression = expression.replace(/convert\((\d+),(\d+),(\d+)\)/g, 'parseInt($3, $1).toString($2)');

    try {
        result = eval(expression);
        document.getElementById('result').textContent = OriginalExpression + '=' + result;
    } catch (error) {
        document.getElementById('result').textContent = '错误: 无效的表达式';
    }
}
