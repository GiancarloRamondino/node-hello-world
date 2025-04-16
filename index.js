function hello(message) {
  console.log(message);
}

hello("Hello, Boolean!");
hello("Hip HIp Hurra!"); //bonus

const a = process.argv[2] ?? 'world'; //?? è  un valore che viene usato se il primo è undefined

console.log(`Hello, ${a}!`)