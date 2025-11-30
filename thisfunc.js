const obj = {
    username: "Rayhan",
    greet: function() {
        console.log(this.username);
    }
};

obj.greet(); 
