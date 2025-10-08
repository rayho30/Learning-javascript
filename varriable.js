const accountId = 123456;
let accountEmail = "rayhan@gmail.com";
var accountPassword = "12300";
accountCity = "Dhaka";  // implicitly global (not good practice)

// accountId = 10;  ❌ Not allowed (const can't be reassigned)
accountEmail = "rayhanspydet@gmail.com";
accountPassword = "123";
accountCity = "Cumilla";

console.table([accountId, accountEmail, accountPassword, accountCity]);
