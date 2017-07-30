let johnny = {
    name: "John Doe",
    favoriteColor: "Blue",

    func: function person(name, color) {

        let nameExp = "My name is ";
        let colorExp = " and my favorite color  is "

        console.log(nameExp + name + colorExp + color);
    }
}

function Person(fullName, favColor, greet) {
    this.name = fullName;
    this.color = favColor;
    this.greet = function() {
        console.log("Hello there, my name is " + this.name + ", and my favorite color is " + this.color + "." );
    }
}

let john = new Person("John Doe", "Blue"); // calling constructor function
let jane = new Person("Jane Doe", "Green"); // calling constructor function

john.greet();
jane.greet();