var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
    rl.question('Please enter the gender : ', (gender) => {
        //rl.question('Please enter the age: ', (age) => {
            if(gender=='male')   
    {message='21 yrs to get major'}
    if(gender=='female')
    {message='18 yrs to get major '}
   
   
   
            console.log(message);
            process.exit();
                 });
             //});
         