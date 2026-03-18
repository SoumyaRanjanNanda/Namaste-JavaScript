const accountId = 144553       // const means not changeable
let accountEmail = "Soumya@google.com" 
var accountPassword = "12345"
accountCity = "Bhubaneswer"
let accountState;

// accountId = 2 // not allowed becasuse accountId is constant
accountEmail="hc@hc.com"
var accountPassword = "775"
accountCity = "cuttuck"
/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.log(accountId); //console.log(); use for print 
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]); /* instend of use console.log();
                                                                        so many times you can use console.table([]); 
                                                                        print in one table and ";" is not ncessery */

/*
output 
console.log(accountId);
144553

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
┌─────────┬──────────────────────┐
│ (index) │ Values               │
├─────────┼──────────────────────┤
│ 0       │ 144553               │
│ 1       │ 'hc@hc.com'          │
│ 2       │ '775'                │
│ 3       │ 'cuttuck'            │
│ 4       │ undefined            │
└─────────┴──────────────────────┘
*/
