module.exports = function toReadable (number) {
    let ones = [
        '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen',
    ];

    let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', ];

    let result = '';

    if (number === 0) {
        return 'zero';
    }

    if (Math.floor(number / 100) > 0) {
        result = `${result}${ones[Math.floor(number / 100)]} hundred `;
        number %= 100;
    }

    if (number < 20) {
        result = `${result}${ones[number]} `;
    } else {
        result = `${result}${tens[Math.floor(number / 10)]} `;
        result = `${result}${ones[number % 10]} `;
    }

    return result.trim();
}