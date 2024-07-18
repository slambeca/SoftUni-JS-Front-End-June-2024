function scheduleMeetings(input) {
    let meetings = {};

    for (const entry of input) {
        const [day, name] = entry.split(' ');

        if (meetings[day]) {
            console.log(`Conflict on ${day}!`);
        } else {
            meetings[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }

    Object.keys(meetings).forEach(day => console.log(`${day} -> ${meetings[day]}`));
}

scheduleMeetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
);
