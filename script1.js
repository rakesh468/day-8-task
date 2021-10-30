class Movie{
    constructor(title,studio,rating="PG"){ //default value of rating is "PG"
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    
    
//A method getPG, which takes an array of base type Movie as its argument
    getPG(movie1){
        let pgMov = new Movie[movie1.length];
        let newArrayIndex = 0;
        for (let i = 0; i < movie1.length; i++) {
        if (movie1[i].rating.equals("PG")) {
        pgMov[newArrayIndex] = movie1[i];
        newArrayIndex++;
        }
        }
        return pgMov;
    };
}


// piece of code that creates an instance of the class Movie
movie1 = new Movie("men in black","lyca Productions","PG13");
console.log(movie1.title);    // men in black
console.log(movie1.studio);   // lyca Productions
console.log(movie1.rating);   // PG13