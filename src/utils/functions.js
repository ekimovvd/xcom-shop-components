import { declineWrapper } from "decline-word";

function onNumberWithSpaces(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

function onDecline(words) {
    return declineWrapper(...words);
}

function onNumberFormat(number) {
    var suffixes = ["", "тыс.", "млн.", "млрд."];

    var suffixNum = Math.floor(("" + number).length / 3);
    var shortValue = parseFloat(
        (suffixNum !== 0
            ? number / Math.pow(1000, suffixNum)
            : number
        ).toPrecision(2)
    );
    return `${shortValue} ${suffixes[suffixNum]}`;
}

function formattingValidityPeriodCreditCard(date) {
    return date
        .replace(/\D/g, "") // only numbers
        .replace(/^([2-9])$/g, "0$1") // 3 > 03
        .replace(/^(1)([3-9])$/g, "0$1/$2") // 13 > 01/3
        .replace(/^0+/g, "0") // 00 > 0
        .replace(/^([0-1]\d)(\d{1,2}).*/g, "$1/$2"); // 113 > 11/3
}

function formattingSecurityCodeCreditCard(code) {
    return code
        .replace(/\D/g, "") // only numbers
        .replace(/^\d{5,}$/g, ""); // max length is 4 digits
}

export { onNumberWithSpaces, onDecline, onNumberFormat, formattingValidityPeriodCreditCard, formattingSecurityCodeCreditCard };
