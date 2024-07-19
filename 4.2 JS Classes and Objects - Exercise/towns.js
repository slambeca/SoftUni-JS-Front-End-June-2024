function solve(input) {
    // class City {
    //     constructor(town, latitude, longitude) {
    //         this.town = town;
    //         this.latitude = latitude;
    //         this.longitude = longitude;
    //     }
    // }

    for(const entry of input) {
        let[town, latitude, longitude] = entry.split(' | ');

        // let cityObject = new City(town, parseFloat(latitude).toFixed(2), parseFloat(longitude).toFixed(2));
        const townObject = {
            town,
            latitude: parseFloat(latitude).toFixed(2),
            longitude: parseFloat(longitude).toFixed(2),
        };

        console.log(townObject);
    }
}

solve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
);
