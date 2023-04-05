const first = 'III'
const second = 'IIII'
const third = 'VI'
const fourth = 'XVI'
const fifth = 'LV'
const sixth = 'IV'
let sum = 0;


function roman() {
    bank = fourth.split('')
    console.log(bank);
    bank.forEach(function add(element) {
        if (element === 'I') {
            sum = sum + 1;
        }
        if (element === 'V') {
            sum = sum + 5;
        }
        if (element === 'X') {
            sum = sum + 10;
        }
        if (element === 'L') {
            sum = sum + 50;
        }
    })
}

roman();

console.log(sum);




