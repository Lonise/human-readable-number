module.exports = function toReadable (number) {
    const humanReadableNumbersList = {
        0: '',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
    };

    if (number === 0) return ('zero');
    let humanReadableNumber = '';

    if ( 99 < number) {
        humanReadableNumber += humanReadableNumbersList[Math.floor(number/100)] + ' hundred ';
    };    
    if (number % 100 > 0) {
        if (number % 100 > 20) {
            humanReadableNumber += humanReadableNumbersList[Math.floor(number%100/10)*10] + ' ';
        }
        else {
            humanReadableNumber += humanReadableNumbersList[number%100];
            return humanReadableNumber.trim();
        };   
        if (number % 10 > 0) {
            humanReadableNumber += humanReadableNumbersList[number%10];
        };
    };
    return humanReadableNumber.trim();
}
