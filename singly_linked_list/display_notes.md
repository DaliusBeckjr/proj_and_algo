Display

Use classes, attributes, and methods in the JavaScript language for this challenge. Use only a single JavaScript file for this assignment, it may be the same from the Fronts assignment. All examples are done in order, starting with a new instance of the SLL class.

Create display() that uses a while loop and a runner to return a string containing all list values. Build what you wish console.log(myList) did!

 class SLL {
    // constructor, other methods, removed for brevity
    display() {
    	// neatly display nodes in my list
    }
 }

Examples:

SLL1 = new SLL()
SLL1.addFront(76) => Node { data: 76, next: null }
SLL1.addFront(2) => Node { data: 2, next: Node { data: 76, next: null } }
SLL1.display() => "2, 76"
SLL1.addFront(11.41) => Node { data: 11.41, next: Node { data: 2, next: Node { data: 76, next: null } } }
SLL1.display() => "11.41, 2, 76"