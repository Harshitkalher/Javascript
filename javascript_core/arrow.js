const bio = () => ({username: "harshit kalher"})// declaration of arrow function
// here we have no need to add curly braces in case of arrow function, just put parenthisis
console.log(bio())
//THIS keyword
//not usable in any function
//but used in object to refer context of the scope 
const record = {
    name: "harshit kalher",
    graduationYear: "final",
    welcomeMessage: function() {
        console.log(`${this.name} , welcome onField`)// here this refers to the context of the scope, 
        //that means refers name value within this scope/object
    }
}
record.welcomeMessage()