function registerHeroes(heroesAsInput) {
    let heroes = [];

    for(hero of heroesAsInput) {
        let [name, level, items] = hero.split(' / ');

        level = parseInt(level);
        items = items ? items.split(', ') : [];

        heroes.push({
            name,
            level,
            items,
        })
        
    }

    heroes.sort((a, b) => a.level - b.level);

    heroes.forEach(hero => {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items.join(', ')}`);
    }) 
}


registerHeroes([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    );



registerHeroes([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
    ]
    ); 
