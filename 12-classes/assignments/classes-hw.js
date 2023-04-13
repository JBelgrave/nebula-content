
/* Question 1
Write a class that creates an animal
The animal class should have the following properties:
  - name
  - noise
  - eats
  - lives
The animal class should have the following methods:
  - makeNoise
  - eatsWhat
  - livesWhere

Initialize 3 animals with your class & log a sentence to the console, ex:
`Dogs live in peoples houses, they bark and are carnivorous.`
*/

class Animal {
  constructor(name, noise, eats, lives) {
    this.name = name;
    this.noise = noise;
    this.eats = eats;
    this.lives = lives;
  }
  makeNoise() {
    return `${this.name}s ${this.noise}.`;
  }
  eatsWhat() {
    return `${this.name}s eat ${this.eats}.`;
  }
  livesWhere() {
    return `${this.name}s live ${this.lives}.`;
  }
}

const dog = new Animal("Dog", "bark", "meat", "in people's homes");
const cat = new Animal("Cat", "meow", "fish", "in people's homes");
const bird = new Animal("Bird", "chirp", "insects and seeds", "in the wild and in people's homes");

console.log(dog.makeNoise());
console.log(cat.eatsWhat());
console.log(bird.livesWhere());



/* Question 2
Write a class that creates shoes
The shoe should have the following properties:
  - size
  - color
  - type
  - age
Initialize 3 shoes with your class & log a sentence to the console:
  ex: `My flipflops are yellow, size 9, and 6 years old.`
*/

class Shoe {
  constructor(size, color, type, age) {
    this.size = size;
    this.color = color;
    this.type = type;
    this.age = age;
  }
  shoeDescribe() {
    return `My ${this.type} are ${this.color}, size ${this.size}, and ${this.age} years old.`;
  }
}

const flipFlops = new Shoe(9, "yellow", "flipflops", 6);
const sneakers = new Shoe(10, "white", "sneakers", 2);
const boots = new Shoe(11, "black", "boots", 5);

console.log(flipFlops.shoeDescribe());
console.log(sneakers.shoeDescribe());
console.log(boots.shoeDescribe());



//Question 3: Use Inheritance to create parent and child classes
// Reference Automobile -> Coupe example in lesson

// ex: Person -> teacher -> math teacher
//  Animal -> mammal -> land/sea

class Person {
  constructor(name) {
    this.name = name;
  }
  introduce() {
    return `Hi, my name is ${this.name}.`;
  }
}

class Teacher extends Person {
  constructor(name, subject) {
    super(name);
    this.subject = subject;
  }
  teach() {
    return `Hi, my name is ${this.name}, I am a ${this.subject} teacher.`;
  }
}

class MathTeacher extends Teacher {
  constructor(name, yearsOfExperience) {
    super(name, "Math");
    this.yearsOfExperience = yearsOfExperience;
  }
  fullIntro() {
    return `Hi, my name is ${this.name}, I am a math teacher with ${this.yearsOfExperience} years of experience.`;
  }
}

const john = new Person("John");
const jane = new Teacher("Jane", "English");
const bob = new MathTeacher("Bob", 20);

console.log(john.introduce());
console.log(jane.teach());
console.log(bob.fullIntro());