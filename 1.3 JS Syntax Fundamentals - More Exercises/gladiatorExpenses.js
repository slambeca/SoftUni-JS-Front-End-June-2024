function calculateExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let totalGladiatorExpenses = 0;

    let armorRepairCount = 0;
    let helmetRepairCount = 0;
    let swordRepairCount = 0;
    let shieldRepairCount = 0;

    for (let fight = 1; fight <= lostFights; fight++) {
        if (fight % 2 === 0) {
            helmetRepairCount += 1;
        }

        if (fight % 3 === 0) {
            swordRepairCount += 1;
        }

        if (fight % 2 === 0 && fight % 3 === 0) {
            shieldRepairCount += 1;
            if (shieldRepairCount % 2 === 0) {
                armorRepairCount += 1;
            }
        }
    }

    totalGladiatorExpenses += (armorRepairCount * armorPrice);
    totalGladiatorExpenses += (helmetRepairCount * helmetPrice);
    totalGladiatorExpenses += (swordRepairCount * swordPrice);
    totalGladiatorExpenses += (shieldRepairCount * shieldPrice);

    console.log(`Gladiator expenses: ${totalGladiatorExpenses.toFixed(2)} aureus`);
}

calculateExpenses(7, 2, 3, 4, 5);
calculateExpenses(23, 12.50, 21.50, 40, 200);