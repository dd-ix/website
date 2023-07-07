const relativeTimeFormat = new Intl.RelativeTimeFormat('en-US', {
    numeric: "auto",
    style: "long",
});

export function formatRelativeTime(date: string): string {
    let msDiff = Date.parse(date) - Date.now();
    let secDiff = msDiff / 1000;

    if (isInRange(-60, secDiff, 60)) {
        return relativeTimeFormat.format(Math.round(secDiff), "seconds");
    }

    const minDiff = secDiff / 60;

    if (isInRange(-60, minDiff, 60)) {
        return relativeTimeFormat.format(Math.round(minDiff), "minutes");
    }

    const hourDiff = minDiff / 60;

    if (isInRange(-24, hourDiff, 24)) {
        return relativeTimeFormat.format(Math.round(hourDiff), "hours");
    }

    const daysDiff = hourDiff / 24;

    if (isInRange(-7, daysDiff, 7)) {
        return relativeTimeFormat.format(Math.round(daysDiff), "days");
    }

    const weeksDiff = hourDiff / 7;

    if (isInRange(-7, weeksDiff, 7)) {
        return relativeTimeFormat.format(Math.round(weeksDiff), "weeks");
    }

    const yearsDiff = daysDiff / 365.25;
    const monthsDiff = yearsDiff * 12;

    if (isInRange(-12, monthsDiff, 12)) {
        return relativeTimeFormat.format(Math.round(monthsDiff), "months");
    }

    return relativeTimeFormat.format(Math.round(yearsDiff), "years");
}

function isInRange(start: number, value: number, end: number) {
    return start < value && value < end;
}
