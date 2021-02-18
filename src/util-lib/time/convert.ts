/** For logging */
export const stringFriendlyTime = (time: number | undefined) => {
    if (time === undefined) {
        return 'undefined';
    }
    if (time === 0) {
        return '0';
    }
    if (time === Infinity) {
        return 'Infinity';
    }
    if (isNaN(time)) {
        return 'NaN';
    } else {
        return Unix2String.TimeHHMMSS(time);
    }
};

const options = {
    // year: 'short',
    // month: 'short',
    // day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    // hour12: false,
    hourCycle: 'h23',
};

export const Unix2String = {
    /** @returns {string} 11/2/2020, 08:58 */
    DateTimeHHMM: (unix: number) => {
        return new Date(unix).toLocaleDateString('en-NZ', options);
    },
    /** @returns {string} 11/2/2020, 08:58:02 */
    DateTimeHHMMSS: (unix: number) => {
        return new Date(unix).toLocaleDateString('en-NZ', { ...options, ...{ second: '2-digit' } });
    },
    /** @returns {string} 08:58 AM */
    TimeHHMM: (unix: number) => new Date(unix).toLocaleTimeString('en-GB', options),
    /** @returns {string} 8:58:02 AM */
    TimeHHMMSS: (unix: number) => {
        return new Date(unix).toLocaleTimeString('en-NZ', { ...options, ...{ second: '2-digit' } });
    },
    /** @returns 08:58:02.000 */
    TimeHHMMSS_MS: (unix: number) => {
        /** e.g. 14:34:35.534 */
        const d = new Date(unix);
        const millsecs = d.getMilliseconds();
        const millisecsString =
            millsecs < 100
                ? millsecs < 10
                    ? '00'.concat(millsecs.toString())
                    : '0'.concat(millsecs.toString())
                : millsecs.toString();
        return (
            d.toLocaleTimeString('en-NZ', {
                ...{
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: false,
                    hourCycle: 'h24',
                },
                ...{ second: '2-digit' },
            }) + `.${millisecsString}`
        );
    },
};

/**
 * Converts unix into human friendly string
 * @param {number} unix Milliseconds
 * @returns {string}
 */
export const Unix2Timerv1 = (unix: number) => {
    let seconds = unix / 1000;
    let minutes = Math.floor(seconds / 60);
    let hours;
    if (minutes > 59) {
        hours = Math.floor(minutes / 60);
        minutes -= hours * 60;
    }
    seconds = Math.floor(seconds % 60);
    const convertToString = (n: number) => (n >= 10 ? n.toString() : `0 ${seconds}`);
    const time = `${convertToString(minutes)} mins ${convertToString(seconds)} secs`;
    if (hours) {
        return `${convertToString(hours)} hrs ${time}`;
    }
    return time;
};

/** Used Internally */
function _timeStr(t: number) {
    /**  negative index can be used, indicating an offset from the end of the sequence. slice(-2) extracts the last two elements in the sequence */
    return ('00' + t).slice(-2);
}

/**
 * Convert rounded ms into time
 * e.g. -499ms > 0:00
 * -501ms > -0:01
 * 501ms > 0:01
 */
export function Unix2Timer_v2(ms: number) {
    const totalSecs = Math.round(Math.abs(ms) / 1000);
    const minutes = Math.floor(totalSecs / 60) % 60;
    const seconds = totalSecs % 60;
    const hours = Math.floor(totalSecs / (60 * 60));
    const prefix = totalSecs >= 1 ? (Math.sign(ms) === -1 ? '-' : '') : '';
    const minSecsStr = `${_timeStr(minutes)}:${_timeStr(seconds)}`;
    if (hours) {
        return `${prefix}${_timeStr(hours)}:${minSecsStr}`;
    } else {
        return prefix.concat(minSecsStr);
    }
}
