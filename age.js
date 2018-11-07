var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
    rl.question('Please enter the age : ', (age) => {
        rl.question('Please enter the health condition: ', (condition) => {
            var message=""
if (age>=10 & age<=15)
{message='eligible to miniride'}
if(age>=16 & age<=25)
{message='eligible to roller coaster'}
if(age>=26 & age<=40 & condition=='patient'||'alignment')
{message='not allowed to roller coaster'}
console.log(message);
   process.exit();
           // rl.close();
        });
    });
