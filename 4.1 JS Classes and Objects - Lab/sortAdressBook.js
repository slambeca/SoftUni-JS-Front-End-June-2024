function sortInformation(input) {
    let addresses = {};

    for(const entry of input) {
        const [name, address] = entry.split(':');
        addresses[name] = address;
    };

    Object.entries(addresses).sort((a, b) => a[0].localeCompare(b[0])).forEach(([name, address]) => console.log(`${name} -> ${address}`));

}

sortInformation(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
)
