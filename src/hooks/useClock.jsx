
import { addMinutes } from 'date-fns';
import { useEffect, useState } from 'react';



const TIMEZONE_OFFSET = {
    PST: -7 * 60,
    EST: -4 * 60,
    EDT: -4 * 60,
    BST: 1 * 60,
    MST: -6 * 60,
};

const useClock = (timezone, offset = 0) => {
    const [localDate, setLocalDate] = useState(null);
    const [localOffset, setLocalOffset] = useState(0);
    const [localTimezone, setLocalTimezone] = useState('');
    const [utc, setUtc] = useState(null);

    useEffect(() => {
        let d = new Date();
        const lo = d.getTimezoneOffset();
        d = addMinutes(d, localOffset);
        setUtc(d);
        setLocalOffset(lo);
    }, []);

    useEffect(() => {
        if (utc !== null) {
            if (timezone) {

                offset = TIMEZONE_OFFSET[timezone] ?? offset;
                const newUtc = addMinutes(utc, offset);
                setLocalDate(newUtc);
            } else {
                const newUtc = addMinutes(utc, -localOffset);
                // console.log(newUtc);
                const dateStr = newUtc.toUTCString().split(' ')
                setLocalDate(newUtc)
                setLocalTimezone(dateStr.pop());
            }
        }
    }, [utc]);

    return {
        date: localDate,
        dateUTC: utc,
        offset,
        timezone,
        localOffset,
        localTimezone

    };
};

export default useClock;
