import cars from "../public/api/cars.json";

export default function Example() {
  const bodyTypes = [
    ...new Map(cars.map((car) => [car.bodyType, car.bodyType])).values(),
  ];
  // console.log([...new Set(cars.map((car) => car.bodyType))]);
  // console.log("Map", bodyTypes);
  return <div>Hello World!</div>;
}

// // function test<T> (arg: T): T {
// //  return arg;
// // }

// // let num1 = test(5);

// // console.log(typeof(num1))

// interface Items<T, U> {
//   name: T;
//   age: U;
// }

// type PartialItems = Partial<Items<string, string>>;

// type ReadonlyItems = Readonly<PartialItems>;

// const optionalItems : ReadonlyItems = {name: "hsn", age: "30"}

// optionalItems.age = "Godz";

// //const obj1: Items<string, number> = { name: "John" };

// interface Person {
//   name: string;
//   age: number;
// }

// interface Test {
//   test1: boolean;
//   test2: Function;
// }

// type IntersectionType = Person & Test;

// const obj1 : IntersectionType = {name: "HSN", age: 30, test1: true, test2: ()=>{}}

// type RecordPerson = Record<string, "q">;

// const obj1: RecordPerson = { : "q" };

// type PickPerson = Pick<Person, "name" | "age">;

// const obj1: RecordPerson = {name: "Hassan", age: 30}

// type NonNullableString = NonNullable<string | null | undefined>;

// const str1: NonNullableString = undefined;

// function throwError(message: string): never {
//   throw new Error(message);
// }

// console.log(throwError("error"));

// const f = function () {
//   throw new Error();
// };

// const str = "me";

// type MyType = ThisParameterType<typeof str>;

// class Person {
//   name: string;
//   age: number;
//   constructor(name: string, age: number) {
//     (this.name = name), (this.age = age);
//   }
//   sayHello() {
//     console.log(`Hey ${this.name}!`);
//   }
// }

// class Student extends Person {
//   university: string;
//   constructor(name: string, age: number, university: string) {
//     super(name, age);
//     this.university = university;
//   }
//   sayCongrats() {
//     console.log(
//       `Congrats ${this.name} on getting accepted in ${this.university}`
//     );
//   }
// }

//const person1 = new Person("HSNN", 34);

//person1.sayHello();

// const student1 = new Student("HSN", 34, "IAU");

// student1.sayCongrats();

// student1.sayHello();

// const obj1 = {
//   name: "HSN",
//   getName: () => {
//     console.log(this.name);
//   },
// };

// obj1.getName()

// async function doSomethingAsync() {
//   return new Promise((resolve, reject) => {
//     const success = true;
//     if (success) {
//       setTimeout(() => {
//         resolve("Success!");
//       }, 1000);
//     } else {
//       reject("Something bad happened!");
//     }
//   });
// }

// async function main() {
//   try {
//     const result = await doSomethingAsync();
//     console.log("Success:", result);
//   } catch (error) {
//     console.log("Reject:", error);
//   }
// }

// main();
// console.log("Second line");

// setTimeout(() => {
//   console.log("Third line");
// }, 0);

const myPromise = new Promise((resolve, reject) => {
  const success = false;

  if (success) {
    resolve("Hooray!");
  } else {
    reject("Oops!");
  }
});

myPromise
  .then((result) => console.log("Resolved:", result))
  .catch((error) => console.log("Rejected:", error));
