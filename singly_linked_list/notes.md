# Fronts

Use classes, attributes, and methods in the JavaScript language for all challenges. Use only a single JavaScript file for this assignment. All examples are done in order, starting with a new instance of the SLL class.
<br>

## Add Front

Write a method that accepts a value and create a new node, assign it to the list head, and return a pointer to the new head node.

```
 class SLL {
     // constructor, other methods, removed for brevity
     addFront(value) {
    	
    }
 }

```

Examples:

SLL1 = new SLL()
SLL1.addFront(18) => Node { data: 18, next: null }
SLL1.addFront(5) => Node { data: 5, next: Node { data: 18, next: null } }
SLL1.addFront(73) => Node { data: 73, next: Node { data: 5, next: Node { data: 18, next: null } } }

<br>

## Remove Front

Write a method to remove the head node and return the new list head node. If the list is empty, return null.

```
 class SLL {
    // constructor, other methods, removed for brevity
     removeFront() {
    	
    }
 }

```

Examples:

SLL1.removeFront() => Node { data: 5, next: Node { data: 18, next: null } }
SLL1.removeFront() => Node { data: 18, next: null }
<br>

## Front

Write a method to return the value (not the node) at the head of the list. If the list is empty, return null.

```
 class SLL {
    // constructor, other methods, removed for brevity
     front() {
    	
    }
 }


```

Examples:

SLL1.front() => 18
SLL1.removeFront() => null
SLL1.front() => null