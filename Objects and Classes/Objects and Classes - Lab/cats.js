function cats(arr = []) {
    let cat = [];
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    for (let i = 0; i < arr.length; i++) {
        let arrData = arr[i].split(` `);
        let [name, age] = [arrData[0], arrData[1]];
        cat.push(new Cat(name, age));
    }
    for (const kitten of cat) {
        kitten.meow();
    }
}
cats(['Candy 1', 'Poppy 3', 'Nyx 2']);
