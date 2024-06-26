function ticketPrice (typeOfDay, age) {
    let priceOfTicket;

    if (typeOfDay == 'Weekday' && age >= 0 && age <= 18) {
        priceOfTicket = 12;
    } else if (typeOfDay == 'Weekday' && age > 18 && age <= 64) {
        priceOfTicket = 18;
    } else if (typeOfDay == 'Weekday' && age > 64 && age <= 122) {
        priceOfTicket = 12;
    } else if (typeOfDay == 'Weekend' && age >= 0 && age <= 18) {
        priceOfTicket = 15;
    } else if (typeOfDay == 'Weekend' && age > 18 && age <= 64) {
        priceOfTicket = 20;
    } else if (typeOfDay == 'Weekend' && age > 64 && age <= 122) {
        priceOfTicket = 15;
    } else if (typeOfDay == 'Holiday' && age >= 0 && age <= 18) {
        priceOfTicket = 5;
    } else if (typeOfDay == 'Holiday' && age > 18 && age <= 64) {
        priceOfTicket = 12;
    } else if (typeOfDay == 'Holiday' && age > 64 && age <= 122) {
        priceOfTicket = 10;
    } else {
        priceOfTicket = 'Error!'
    }

    if (priceOfTicket != 'Error!') {
        console.log(`${priceOfTicket}$`);
} else {
    console.log(priceOfTicket);
    }
}

ticketPrice('Holiday', 15)