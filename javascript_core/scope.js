function one (){ // things out from the scope is available within scope but vice versa is not true
    const username = "Harshit" // inside the block is known as block scope or local scope 
    function two (){ // these curly braces are the scope , that defines boundaries of the things within it
        const college = "MIET"
        console.log(username) //inner scope fetch value from outer  scope , but vice versa is not true
        //just like little child take icecream from elder one but elder one not
    }
    two()
}
one()