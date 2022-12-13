import { declineWrapper } from "decline-word";

function onNumberWithSpaces(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

function onDecline(words) {
    return declineWrapper(...words);
}

export { onNumberWithSpaces, onDecline };
