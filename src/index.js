module.exports = function toReadable (number) {

    function units(num) {
        const number = Number(num);

        switch (number) {
            case 0: return 'zero';
            case 1: return 'one';
            case 2: return 'two';
            case 3: return 'three';
            case 4: return 'four';
            case 5: return 'five';
            case 6: return 'six';
            case 7: return 'seven';
            case 8: return 'eight';
            case 9: return 'nine';
        }
    }

    function tens(num) {
        const strNum = num.toString();
        num = Number(num);

        if (strNum === '00') return '';

        if (num < 10) {
            return units(strNum[1]);
        }

        if (num < 20) {
            switch (strNum) {
                case '10': return 'ten';
                case '11': return 'eleven';
                case '12': return 'twelve';
                case '13': return 'thirteen';
                case '15': return 'fifteen';
                case '18': return 'eighteen';

                default: return `${units(strNum[1])}teen`
            }
        }

        let res;

        switch (strNum[0]) {
            case '2': {
                res = 'twenty';
                break;
            }

            case '3': {
                res = 'thirty';
                break;
            }

            case '4': {
                res = 'forty';
                break;
            }

            case '5': {
                res = 'fifty';
                break;
            }

            case '8': {
                res = 'eighty';
                break;
            }

            default: res = `${units(strNum[0])}ty`
        }

        if (strNum[1] !== '0') {
            res = `${res} ${units(strNum[1])}`
        }

        return res;
    }

    function hundreds(num) {
        const strNum = num.toString();
        let result;

        let strHundreds = `${units(strNum[0])} hundred`;
        let strTens = tens(strNum.slice(1));

        if (strTens.length) {
            result = `${strHundreds} ${strTens}`
        } else {
            result = strHundreds;
        }

        return result;
    }

    if (number > 99) return hundreds(number);

    if (number > 9) return tens(number);

    return units(number);
};
