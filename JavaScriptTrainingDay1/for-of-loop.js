const MOVIES=["play","movie","drama"];

// call back function 
function iterate(item) {
    console.log(item);
  }

function printMovies(...movies)
{
    movies.forEach(iterate)
}



printMovies(...MOVIES);

/*

Iterator example Symbol



*/

let it=MOVIES[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());

for(const name of MOVIES)
{
    if(name=="play")
    break;
    console.log(name);

}