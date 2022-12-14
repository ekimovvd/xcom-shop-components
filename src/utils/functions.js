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

export { onNumberWithSpaces, onDecline, onNumberFormat };
