let expression = "";  // Store the current expression

const buttons = document.querySelectorAll('.button');
const input = document.querySelector('.input');

// Button click event handler
buttons.forEach(button => {
    button.addEventListener('click', e => {
        const value = e.target.innerHTML;

        if (value === '=') {
            try {
                expression = eval(expression).toString();
            } catch (error) {
                expression = 'Syntax Error';
            }
        } else if (value === 'C') {
            expression = '';
        } else if (value === 'DEL') {
            expression = expression.slice(0, -1);
        } else if (value === '±') {
            if (expression && !isNaN(expression)) {
                expression = (-1 * parseFloat(expression)).toString();
            }
        } else if (value === '√') {
            if (expression && !isNaN(expression)) {
                expression = Math.sqrt(parseFloat(expression)).toString();
            }
        } else {
            expression += value;
        }

        input.value = expression;
    });
});
