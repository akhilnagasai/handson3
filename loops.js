var cars=['swift','benz','ambassador','nano','fortune']
var i=0
var len= cars.length
var text=""

/*var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
    rl.question('Please choose the loop : ', (loop)=> { */       
       if(loop=='for')    
           { for ( ; i < len; i++) { 
    text += cars[i] + "\n";
}
console.log(text);}
      
      if(loop=='while')
     {while (i<len) {
        text += cars[i] + "\n";
        i++;
    }
    console.log(text);}
      if (loop=="do while")
      {do{
        text += cars[i] + "\n";
        i++;
      }
      while(i<len)
   console.log(text);}
   //process.exit();
    //})