var movies=[movie1=[]]
movie1.title='Puff the Magic Dragon '
movie1.duration=30+'minutes'
movie1.stars=' Puff, Jackie, Living Sneezes'
var text=''
    var x
function movieDatabase(){
for(x in movies){
  text=movies[x]
  console.log(text)
}
}
movieDatabase()
