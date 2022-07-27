import { padWithLeadingZero } from "./number-helpers";

function getDurationInMinutesAndSeconds(durationSeconds) {
    let minutes = Math.floor(durationSeconds / 60);
    let seconds = durationSeconds % 60;

    let paddedMinutes = padWithLeadingZero(minutes, 2);
    let paddedSeconds = padWithLeadingZero(seconds, 2);

    return `${paddedMinutes}:${paddedSeconds}`;
}

function getLocaleDateString(isoDateString) {
    let date = new Date(isoDateString);
    return date.toLocaleDateString(window.navigator.language);
}

const dateHelper = {
    getDurationInMinutesAndSeconds: getDurationInMinutesAndSeconds,
    getLocaleDateString: getLocaleDateString
}

export default dateHelper;