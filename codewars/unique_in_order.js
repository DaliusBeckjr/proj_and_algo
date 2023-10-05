// Implement the function unique_in_order which takes as argument a 
// sequence and returns a list of items without any elements with 
// the same value next to each other and preserving the original 
// order of elements.

// problem 1 wed Oct 4 2023 (day 1)
// challenge was thinking of recursions from happening with
// the duplicates in the array that could have occur

function unique_in_order(iterable) {
    let myArr = [];

    for (let i = 0; i < iterable.length; i++) {
        if (iterable[i] !== iterable[i + 1]){
            myArr.push(iteralbe[i]);
        }
    }
    return myArr;
}