/*const number1 = prompt('1');
const number2 = prompt('2');
const number3 = prompt('3');

function number(arg1, arg2, arg3) {
    const result = String(arg1) + arg2 + arg3;
    return result;
}

function toPower(num, power) {
    const res = nun ** power;
    return res;
}

function toPower(num, power = 2) {
    const arg = num ** power;
    return res;
}
console.log(number(number1, number2, number3));*/

function getCredit(age, hasJob = false) {
    switch (true) {
        case age > 24 && hasJob:
            return 1000;
        break
        case age > 24:
            return 300;
        break
        default:
            return 0;
        break
    }
}

function canBuy(price, age, money, hasJob) {
    const creditMoney = getCredit(age, hasJob)
    return price <= money + creditMoney
}

console.log(canBuy(2300, 25, 1300, true))