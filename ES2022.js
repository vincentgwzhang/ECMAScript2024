{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    let fruit = fruits.at(2); // Apple
}



{
    const name = "W3Schools";
    let letter = name.at(2);
    // console.log(letter); S
}




{
    class Person {
        #firstName = 'Joseph';
        #lastName = 'Stevens';
        get name() {
            return `${this.#firstName} ${this.#lastName}`;
        }
    }
    const person = new Person();
    //console.log(person.name);
    // SyntaxError: Private field '#firstName' must be
    // declared in an enclosing class
    //console.log(person.#firstName);
    //console.log(person.#lastName);
}




{
    class Person {
        #firstName = 'Joseph';
        #lastName = 'Stevens';
        get name() {
            return `${this.#firstName} ${this.#lastName}`;
        }
    }

    // console.log(Object.hasOwn(Person, 'name'));
}








{
    class Human {
        name = "John";

        constructor(name) {
            this.#setName('Amy') // OK
        }

        #setName(name) {
            this.name = name;
        }

        get name() {
            return this.name;
        }
    }

    const human = new Human()
    //human.#setName('Amy') // ERROR!
    console.log(human.name);
}