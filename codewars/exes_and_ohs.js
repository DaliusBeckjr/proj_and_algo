// Check to see if a string has the same amount of 'x's and 'o's. The 
// method must return a boolean and be case insensitive. The string can 
// contain any char.

// tip breakedown the code into smaller parts of thought
// one. we need to iterate through a string
// two. we are looking for 2 things. x's and o's
// three. it's case insensitive. our string needs to be set in lowercase
//        or uppercase
// four. checking to see if we have same amount of x and o
//       we are comparing them both for the bool.

// day 2 / 365 


function XO(str) {

    str = str.toLowerCase();
    
    let hugs = 0;
    let kisses = 0;
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'x'){
        hugs++;
        } else if (str[i] === 'o') {
        kisses++;
        }
    }
    return hugs === kisses;
}