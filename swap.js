var a,b,c,temp
var rl = require("readline");
var prompts = rl.createInterface(
    process.stdin, process.stdout);
prompts.question("enter a:", (a)=> {
    prompts.question('enter b:',(b)=>{
        prompts.question('enter c:',(c)=>{
    console.log(a,b,c)
    temp=a
    a=b
    b=c
    c=temp
    console.log(a,b,c)
    process.exit()
        })})})