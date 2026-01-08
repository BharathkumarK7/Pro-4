function greet(props) {
  console.log("Hello" + (props.name + "you are " + props.age + "years old." ));

}

greet({name: "John", age: 23});
greet({name: "Alice", age: 26});
greet({name: "Bob", age: 30});
greet({name: "Eve", age: 22});
greet({name: "Charlie", age: 28});
greet({name: "Diana", age: 25});


greet({name: "Frank", age: 27});greet({name: "Grace", age: 24});
greet({name: "Hank", age: 29});
greet({name: "Ivy", age: 21});greet({name: "Jack", age: 31});