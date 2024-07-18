function solve(input) {
    let phonebook = {};

    for (const entry of input) {
        let [name, phone] = entry.split(' ');
        phonebook[name] = phone;
    }

    Object.keys(phonebook).forEach(key => console.log(`${key} -> ${phonebook[key]}`));
}

solve(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
);
