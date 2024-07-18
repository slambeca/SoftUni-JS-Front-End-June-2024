function createPersonObject(fName, lName, age) {
    let person = {
        firstName: fName,
        lastName: lName,
        age: age,
    }

    return person;
}

let personObject = createPersonObject('Peter', 'Pan', 20);
console.log(personObject);
