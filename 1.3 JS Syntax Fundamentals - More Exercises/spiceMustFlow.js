function spiceCalculator(firstDayYield) {
    let totalSpiceHarvested = 0;
    let daysCount = 0;
    let spiceAvailable = firstDayYield;

    while (spiceAvailable >= 100) {
        daysCount += 1;
        totalSpiceHarvested += spiceAvailable;
        spiceAvailable -= 10;

        totalSpiceHarvested -= 26;
    }

        if (totalSpiceHarvested < 0) {
            totalSpiceHarvested = 0;
        }

    if (totalSpiceHarvested >= 26) {
        totalSpiceHarvested -= 26;
    } else {
        totalSpiceHarvested = 0;
    }

    console.log(daysCount);
    console.log(totalSpiceHarvested);
}

spiceCalculator(111);
spiceCalculator(450);