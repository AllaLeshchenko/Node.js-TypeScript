// task1 
class Animal {
    constructor(public name: string, public species: string) {}

    sound(): void {
        console.log('The animal makes a sound');
    }
}

class Dog extends Animal {
    constructor(name: string, species: string, public breed: string) {
        super(name, species);
    }

    sound(): void {
        console.log('The dog barks');
    }
}

const animal = new Animal("Generic Animal", "Unknown");
animal.sound();

const dog = new Dog("Buddy", "Canine", "Labrador");
dog.sound();
console.log(dog);


// task2
class Library {
    static totalBooks: number = 0;

    constructor(public books: string[] = []) {}

    addBook(book: string): void {
        this.books.push(book);
        Library.totalBooks += 1;
    }
}
const lib1 = new Library();
lib1.addBook("Book 1");
lib1.addBook("Book 2");

const lib2 = new Library();
lib2.addBook("Book 3");

console.log("Total books:", Library.totalBooks);


// task3
class Vehicle {
    constructor(public make: string, public model: string) {}
}

class Motorcycle extends Vehicle {
  constructor(make: string, model: string, public type: string) {
    super(make, model);
  }
}

const moto = new Motorcycle("Yamaha", "MT-07", "Sportbike");
console.log(moto.make);
console.log(moto.model);
console.log(moto.type);