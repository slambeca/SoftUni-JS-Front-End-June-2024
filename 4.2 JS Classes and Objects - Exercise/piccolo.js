function manageParkingLot(commands) {
    let parkingLot = {};

    for (let command of commands) {
        [action, licensePlate] = command.split(', ');

        if (action === 'IN') {
            parkingLot[licensePlate] = true;
        } else {
            delete parkingLot[licensePlate];
        }
    }

    let sortedCarNumbers = Object.keys(parkingLot).sort();

    if (sortedCarNumbers.length === 0) {
        console.log('Parking Lot is Empty');
    } else {
        sortedCarNumbers.forEach(licensePlate => console.log(licensePlate));
    }
}


manageParkingLot(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
)

manageParkingLot(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']
)
