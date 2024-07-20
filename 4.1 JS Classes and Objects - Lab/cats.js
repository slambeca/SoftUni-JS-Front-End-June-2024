function solve(input) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (const entry of input) {
        const [name, age] = entry.split(' ');

        const cat = new Cat(name, parseInt(age));
        cat.meow();
    }
}

solve(['Mellow 2', 'Tom 5']);
