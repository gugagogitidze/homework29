// 1. შექმენი კლასი Person, რომელსაც ექნება name და age ატრიბუტები. დაამატე მეთოდი introduce(), რომელიც დააბრუნებს ტექსტს:
// Hello, my name is [name] and I am [age] years old.
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

const person1 = new Person("guga", 19);

console.log(person1.introduce());

// 2. დაამატე სტატიკური მეთოდი isAdult(age) კლასთან Person, რომელიც დააბრუნებს true თუ ასაკი მეტია ან ტოლია 18-ის და false - წინააღმდეგ შემთხვევაში.
// დავალება: შექმენი ახალი ობიექტი და შეამოწმე ეს სტატიკური მეთოდი.

class Person2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }

  static isAdult(age) {
    return age >= 19;
  }
}

const person2 = new Person("ani", 19);

console.log(person2.introduce());

console.log(`${person2.name} is an adult:`, person2.age);

// 3. კლასების მემკვიდრეობა (Inheritance)
// შექმენი კლასი Animal, რომელსაც ექნება name და მეთოდი speak(). შექმენი შვილობილი კლასი Dog, რომელსაც ექნება მეთოდი speak(), რომელიც დააბრუნებს: [name] says: Woof!

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} makes a sound.`;
  }
}

class Dog extends Animal {
  speak() {
    return `${this.name} says: Woof!`;
  }
}

const animal1 = new Animal("Animal");
const dog1 = new Dog("jerry");

console.log(animal1.speak());
console.log(dog1.speak());

// 5. შექმენი კლასი Vehicle, რომელსაც ექნება brand და speed ატრიბუტები და მეთოდი describe(). შემდეგ შექმენი Car კლასი, რომელიც მემკვიდრეობით მიიღებს Vehicle-ს და დაამატე თვისება model.
// დავალება: შექმენი რამდენიმე Car ობიექტი და დაიბეჭდე მათი მონაცემები.

class Vehicle {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }

  describe() {
    return `${this.brand} moves at ${this.speed} km/h.`;
  }
}

class Car extends Vehicle {
  constructor(brand, speed, model) {
    super(brand, speed);
    this.model = model;
  }

  describe() {
    return `${this.brand} ${this.model} moves at ${this.speed} km/h.`;
  }
}

const car1 = new Car("BMW", 330, "M4 Competition");
const car2 = new Car("Mercedes-Benz", 330, "cls 63s");
const car3 = new Car("Dodge", 400, "Challenger");

console.log(car1.describe());
console.log(car2.describe());
console.log(car3.describe());

// 6. შექმენი კლასი Product, რომელსაც ექნება name, price და category ატრიბუტები. დაამატე სტატიკური მეთოდი filterByCategory(products, category), რომელიც გამოიყვანს კონკრეტული კატეგორიის პროდუქტებს.
// დავალება: შექმენი რამდენიმე პროდუქტი და ფილტრაციით აჩვენე მხოლოდ electronics კატეგორიის პროდუქტები.
class Product {
  constructor(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;
  }

  static filterByCategory(products, category) {
    return products.filter((product) => product.category === category);
  }
}

const products = [
  new Product("phone", 3400, "electronics"),
  new Product("airpods", 900, "electronics"),
  new Product("shoes", 1200, "clothing"),

];

const electronics = Product.filterByCategory(products, "electronics");
console.log("Electronics Products:", electronics);

// 8. შექმენი კლასი Character, რომელსაც ექნება name და health თვისებები. შექმენი შვილობილი კლასი Warrior, რომელსაც დაემატება attack() მეთოდი, რომელიც შეამცირებს health-ს 10-ით.
// დავალება: შექმენი ორი პერსონაჟი და გამოიყენე მათი attack() მეთოდი.
class Character {
  constructor(name, health) {
    this.name = name;
    this.health = health;
  }

  isAlive() {
    return this.health > 0;
  }
}

class Warrior extends Character {
  attack(target) {
    if (target.isAlive()) {
      target.health -= 10;
      console.log(
        `${this.name} attacked ${target.name}. ${target.name}'s health is now ${target.health}.`
      );
      if (!target.isAlive()) {
        console.log(`${target.name} has been defeated!`);
      }
    } else {
      console.log(`${target.name} is already defeated.`);
    }
  }
}

const warrior1 = new Warrior("guga", 50);
const warrior2 = new Warrior("ani", 100);

console.log(`${warrior2.name} health:`, warrior2.health);
warrior1.attack(warrior2);

// 9. შექმენი კლასი Task, რომელსაც ექნება title, completed და priority ატრიბუტები. დაამატე მეთოდი toggleCompleted(), რომელიც შეცვლის ტასქის სტატუსს (completed).
// დაამატე სტატიკური მეთოდი filterByPriority(tasks, priority), რომელიც დააბრუნებს მხოლოდ იმ ტასქებს, რომლებსაც შესაბამისი პრიორიტეტი აქვთ.

class Task {
  constructor(title, priority = "normal") {
    this.title = title;
    this.completed = false;
    this.priority = priority;
  }

  toggleCompleted() {
    this.completed = !this.completed;
  }

  static filterByPriority(tasks, priority) {
    return tasks.filter((task) => task.priority === priority);
  }
}
const task1 = new Task("მისტერიები", "high");
const task2 = new Task("რკინის ბიორნი", "low");

task1.toggleCompleted();
console.log(task1);

const tasks = [task1, task2];

const highPriorityTasks = Task.filterByPriority(tasks, "high");
console.log(highPriorityTasks);

// 10. შექმენი კლასი Appointment, რომელსაც ექნება title და date ატრიბუტები. დაამატე მეთოდი isToday(), რომელიც დააბრუნებს true, თუ ღონისძიება დღეს უნდა გაიმართოს და false, წინააღმდეგ შემთხვევაში.

class Appointment {
  constructor(title, date) {
    this.title = title;
    this.date = new Date(date);
  }

  isToday() {
    const today = new Date();
    return (
      this.date.getFullYear() === today.getFullYear() &&
      this.date.getMonth() === today.getMonth() &&
      this.date.getDate() === today.getDate()
    );
  }
}

const appointment1 = new Appointment("მეეტ", "2024-02-12");

console.log(`${appointment1.title} is today:`, appointment1.isToday());
