var a,b,c,x,y
/*var readline=require('readline')
var rl=readline.createInterface({
  input:process.stdin,
   output: process.stdout
})
rl.question('enter a:',(a)=>{
    rl.question('enter b:',(b)=>{
      rl.question('enter c:',(c)=>{*/
        x=a>b?a:b
            y=x>c?x:c
        do{
            console.log(x + 'is the greatest number') 
            break;  
           }
           while(x>c)
           //{console.log(x +'is the greatest number')
             // }
           while(c>x)
           {console.log(c +'is the greatest number')
            break; }
      //     process.exit()

//})})})
