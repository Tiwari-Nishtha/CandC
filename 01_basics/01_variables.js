const accountId=144553   //constant
/*variables
prefer not to use var to declare a variable because 
of block scope and functional scope.
use let always
*/
let accountEmail="nishtha@gmail.com"
var accountPassword="12345"
accountCity="Jaipur"
let accountState   //will print the value as undefined

//changing the values of the variable 
//accountId=2......will display error as the variable is declared as constant
accountEmail="nishthatiwari@gmail.com"
accountPassword="654321"
accountCity="bengaluru"

console.log(accountId);
//display single output
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
//displays the values as a table

