import React from 'react';
import ClockDisplay from '../shared/clockDisplay';

const LocalClock = ({ date, timezone, offset }) => {
    return (
        <div>
            <ClockDisplay date={date} title={'My Clock'} timezone={timezone} />
        </div>
    )
};

export default LocalClock;