const accountId = 14458 //const cannot change it store in the memory 
let accountEmail = "aditichandpurkar.com"
var accountPassword = "12345"
accountCity = "Nagpur"
let accountState;//undefined

//accountId = 2  //not allowed

accountEmail = "abs.com"
accountPassword = "2121"
accountCity="jaipur"
console.log(accountId);

/*prefer not to use var 
because of of block scope and functional scope*/ 
console.table([accountId, accountEmail,accountPassword,accountCity])