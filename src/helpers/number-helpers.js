export function padWithLeadingZero(number, targetLength) {
    return String(number).padStart(targetLength, "0");
}