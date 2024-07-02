function roadRadar(speed, area) {
    const isMotorway = area === 'motorway';
    const isCity = area === 'city';
    const isResidential = area === 'residential';
    const isInterstate = area === 'interstate';

    let speedLimit = 0;
    let status = '';

    if (isMotorway) {
        speedLimit = 130;
    } else if (isInterstate) {
        speedLimit = 90;
    } else if (isCity) {
        speedLimit = 50;
    } else if (isResidential) {
        speedLimit = 20;
    }

    let difference = speed - speedLimit

    if (difference <= 20) {
        status = 'speeding';
    } else if (difference <= 40) {
        status = 'excessive speeding';
    } else {
        status = 'reckless driving';
    }
    
    if (speed <= speedLimit) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    } else {
        console.log(`The speed is ${speed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
    }
    
}

roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');

// Variant 2
function roadRadar(speed, area) {
    const speedLimits = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20
    };

    const speedLimit = speedLimits[area];
    const difference = speed - speedLimit;
    let status = '';

    if (difference > 0) {
        if (difference <= 20) {
            status = 'speeding';
        } else if (difference <= 40) {
            status = 'excessive speeding';
        } else {
            status = 'reckless driving';
        }
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
    } else {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    }
}

roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');
