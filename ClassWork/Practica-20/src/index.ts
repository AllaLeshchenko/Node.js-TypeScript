// Создание класса
// Обычная версия
// class User {
//     name: string;
//     age: number;
//     constructor(name: string, age: number){
//         this.name = name;
//         this.age = age;
//     }
//     greet(): void {
//         console.log(`Hello! My name is ${this.name}. My age - ${this.age}`);
//     }
// }
// Сокращенная версия
// Когда для параметра конструктора прописываем модификатор доступа, то в этот момент
// описывается свойство для будущего объекта
// инициализируется свойство для будущего объекта
// class User {
//     constructor(public name: string, public age: number){ }
// }

// const user = new User('John', 25);
// const user2 = new User('Olga', 20);

// console.log(user);
// console.log(user2);

// user.greet();
// user2.greet();


// 1. Создайте класс `User`, который имеет два свойства: `name` (тип `string`) и `age` (тип `number`).
// 2. Напишите конструктор, который принимает значения для имени и возраста и присваивает их
// соответствующим свойствам.
// 3. Добавьте метод `greet`, который выводит в консоль сообщение с приветствием, включающим имя
// пользователя.
// class User1 {
//     constructor(public name: string, public age: number) { }
//     greet(): void {
//         console.log(`Hello, my name ${this.name} and have ${this.age}`)
//     }
// }
// const user1 = new User1('Alex', 27);
// const user3 = new User1('Anna', 37);

// user1.greet();
// user3.greet();



// Модификатор доступа private
// class User {
//     private password: string;

//     constructor(password: string){
//         this.password =password;
//     }

//     private encryptPassword(): string {
//         return `encrypted-${this.password}`;
//     }

//     public showPassword(): void {
//         console.log(this.encryptPassword);
//     }
// }
// const user = new User('12345');
// console.log(user);
// // console.log(user.password);
// // console.log(this.encryptPassword);
// user.showPassword();


// Модификатор доступа readonly
class Config {
    readonly version: string = '1.0.0';
    constructor(public readonly name: string){}
}

const config = new Config('App');
// config.version = '1.0.1';
console.log(config.version);



// Измените класс `User`, добавив приватное свойство `password`, которое будет хранить пароль пользователя.
// 2. Добавьте публичный метод для установки пароля (например, `setPassword(password: string)`), который
// позволит менять значение этого приватного свойства.
// 3. Создайте публичный метод `checkPassword(password: string)`, который будет проверять корректность
// введенного пароля и возвращать `true` или `false`
// class User {
//     private password: string;

//     constructor( ){this.password = ('')}

//     public setPassword(password: string): void {
//         this.password = password
//     }

//     public checkPassword(password: string): boolean{
//         return this.password === password
//     }
// }

// const user = new User();
// user.setPassword('123456');
// console.log(user.checkPassword('12345'));
// console.log(user.checkPassword('123456'));



// Создание класса Admin
// 1. Создайте класс `Admin`, который наследуется от `User`.
// Добавьте в класс `Admin` метод `displayUsers()`, который выводит в консоль список всех пользователей.
// Для этого создайте статический массив `users` в классе `User`, куда будете добавлять созданных пользователей.
// 2. Переопределение метода greet
// Вклассе `Admin` переопределите метод `greet()`, чтобы он выводил сообщение о том, что пользователь является администратором.
class User {
    static users: User[] = [];

    constructor(public name: string) {
        User.users.push(this)
    }
    greet(): void {
        console.log(`Hello, i am user ${this.name}`);
    }
}
class Admin extends User {
    constructor(name: string) {
        super(name)
    }
    greet(): void {
        console.log(`Hello, i am admin ${this.name}`)
    }
    displayUser(): void {
        console.log(`Users list : `);
        User.users.forEach((user, index) => console.log(`${index + 1}. ${user.name}`));
    }
}
 const user1 = new User('Alex');
 const user2 = new User('Anna');
 const admin = new Admin('olga');

 admin.greet();
 user1.greet();
 user2.greet();
 admin.displayUser();