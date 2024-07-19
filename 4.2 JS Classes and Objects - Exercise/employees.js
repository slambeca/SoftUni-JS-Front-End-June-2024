function solve(input) {
    class Employee {
        constructor(name) {
            this.name = name;
        }
    }

    for (const entry of input) {
        let name = entry.split(", ");
        const nameLength = name.toString().length;
        let employee = new Employee(name);

        console.log(`Name: ${employee.name} -- Personal Number: ${nameLength}`);
    }
}

solve([
'Silas Butler',
'Adnaan Buckley',
'Juan Peterson',
'Brendan Villarreal'
]
);
