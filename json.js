const person = {
    name: "John",
    age: 30,
    city: "New York",
    hobbies: ["reading", "traveling", "cooking"],
    address: {
        street: "123 Main St",
        zip: "10001"
    }

}
console.log(person);
const personJson = JSON.stringify(person);
console.log("JSON Output are here", personJson);
const personObj = JSON.parse(personJson);
console.log("Object Output are here", personObj);