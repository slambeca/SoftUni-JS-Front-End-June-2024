function vacation(countPeople, type, day) {
    // const isFriday = day === 'Friday';
    // const isStudentGroup = type === 'Students';
    // const isBusinessGroup = type === 'Business';
    // const isRegularGroup = type === 'Regular';

    let ticketPrice;
    let totalTicketPrice;


    if (day === 'Friday') {
        if (type === 'Students') {
            ticketPrice = 8.45;
        } else if (type === 'Business') {
            ticketPrice = 10.90;
        } else if (type === 'Regular') {
            ticketPrice = 15;
        }
    } else if (day === 'Saturday') {
        if (type === 'Students') {
            ticketPrice = 9.80;
        } else if (type === 'Business') {
            ticketPrice = 15.60;
        } else if (type === 'Regular') {
            ticketPrice = 20;
        }
    } else if (day === 'Sunday') {
        if (type === 'Students') {
            ticketPrice = 10.46;
        } else if (type === 'Business') {
            ticketPrice = 16;
        } else if (type === 'Regular') {
            ticketPrice = 22.50;
        }
    }

    totalTicketPrice = countPeople * ticketPrice;

    if (type === 'Students' && countPeople >= 30) {
        totalTicketPrice *= 0.85;
    } else if (type === 'Regular' && countPeople >= 10 && countPeople <= 20) {
        totalTicketPrice *= 0.95;
    } else if (type === 'Business' && countPeople >= 100) {
        totalTicketPrice = totalTicketPrice - 10 * ticketPrice;
    }
    console.log(`Total price: ${totalTicketPrice.toFixed(2)}`);
}


vacation(30, "Students", "Sunday");
vacation(40, 'Regular', 'Saturday');


// Variant 2
function vacation(countPeople, type, day) {
    const isFriday = day === 'Friday';
    const isSaturday = day === 'Saturday';
    const isSunday = day === 'Sunday';

    const isStudentsGroup = type === 'Students';
    const isBusinessGroup = type === 'Business';
    const isRegularGroup = type === 'Regular';

    let ticketPrice;
    let totalTicketPrice;


    if (isFriday) {
        if (isStudentsGroup) {
            ticketPrice = 8.45;
        } else if (isBusinessGroup) {
            ticketPrice = 10.90;
        } else if (isRegularGroup) {
            ticketPrice = 15;
        }
    } else if (isSaturday) {
        if (isStudentsGroup) {
            ticketPrice = 9.80;
        } else if (isBusinessGroup) {
            ticketPrice = 15.60;
        } else if (isRegularGroup) {
            ticketPrice = 20;
        }
    } else if (isSunday) {
        if (isStudentsGroup) {
            ticketPrice = 10.46;
        } else if (isBusinessGroup) {
            ticketPrice = 16;
        } else if (isRegularGroup) {
            ticketPrice = 22.50;
        }
    }

    totalTicketPrice = countPeople * ticketPrice;

    if (isStudentsGroup && countPeople >= 30) {
        totalTicketPrice *= 0.85;
    } else if (isRegularGroup && countPeople >= 10 && countPeople <= 20) {
        totalTicketPrice *= 0.95;
    } else if (isBusinessGroup && countPeople >= 100) {
        totalTicketPrice -= 10 * ticketPrice;
    }
    console.log(`Total price: ${totalTicketPrice.toFixed(2)}`);
}

vacation(30, "Students", "Sunday");
vacation(40, 'Regular', 'Saturday');
