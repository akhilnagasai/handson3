var books=[book1=[],book2=[]]
book1.title='the hobbit'
book2.title='the lord of the rings'
book1.author='J.R.R.Tolkein'
book2.author='J.R.R.Tolkein'
book1.alreadyread='yes'
book2.alreadyread='no'
var text=''
var x
var y
for(x in books)
{
    text=books[x]
    console.log(text)
}
x=0
if(books[x]==books[0] & books[0].alreadyread=='yes'){
console.log('you already read'+ ' '+ books[0].title+ ' '+ 'by'+ ' '+ books[0].author)
}
else{
console.log('you still need to read'+ ' '+ books[0].title+ ' '+ 'by'+ ' '+ books[0].author)
}
x=1
if(books[x]==books[1] & books[1].alreadyread=='yes'){
console.log('you already read'+ ' '+ books[1].title+ ' '+ 'by'+ ' '+ books[1].author)
}
else{
console.log('you still need to read'+ ' '+ books[1].title+ ' '+ 'by'+ ' '+ books[1].author)
}

