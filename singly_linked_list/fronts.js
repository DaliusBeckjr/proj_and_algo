// class Node {
//     constructor(data) {
//       this.data = data;
//       this.next = null;
//     }
//   }
  
//   class SLL {
//     constructor() {
//       this.head = null;
//     }
  
//     addFront(value) {
//       const newNode = new Node(value);
  
//       if (this.head === null) {
//         this.head = newNode;
//       } else {
//         newNode.next = this.head;
//         this.head = newNode;
//       }
  
//       return this.head;
//     }
//   }
//   const SLL1 = new SLL();
//   console.log(SLL1.addFront(18)); // Output: Node { data: 18, next: null }
//   console.log(SLL1.addFront(5)); // Output: Node { data: 5, next: Node { data: 18, next: null } }
//   console.log(SLL1.addFront(73)); // Output: Node { data: 73, next: Node { data: 5, next: Node { data: 18, next: null } } }

// class Node {
//     constructor(data) {
//       this.data = data;
//       this.next = null;
//     }
//   }
  
//   class SLL {
//     constructor() {
//       this.head = null;
//     }
  
//     addFront(value) {
//       const newNode = new Node(value);
  
//       if (this.head === null) {
//         this.head = newNode;
//       } else {
//         newNode.next = this.head;
//         this.head = newNode;
//       }
  
//       return this.head;
//     }
  
//     removeFront() {
//       if (this.head === null) {
//         return null;
//       }
  
//       const removedNode = this.head;
//       this.head = this.head.next;
//       removedNode.next = null;
  
//       return this.head;
//     }
//   }

//   const SLL1 = new SLL();
// SLL1.addFront(18);
// SLL1.addFront(5);
// console.log(SLL1.removeFront()); // Output: Node { data: 5, next: Node { data: 18, next: null } }
// console.log(SLL1.removeFront()); // Output: Node { data: 18, next: null }
// console.log(SLL1.removeFront()); // Output: null


// class Node {
//     constructor(data) {
//       this.data = data;
//       this.next = null;
//     }
//   }
  
//   class SLL {
//     constructor() {
//       this.head = null;
//     }
  
//     addFront(value) {
//       const newNode = new Node(value);
  
//       if (this.head === null) {
//         this.head = newNode;
//       } else {
//         newNode.next = this.head;
//         this.head = newNode;
//       }
  
//       return this.head;
//     }
  
//     removeFront() {
//       if (this.head === null) {
//         return null;
//       }
  
//       const removedNode = this.head;
//       this.head = this.head.next;
//       removedNode.next = null;
  
//       return this.head;
//     }
  
//     front() {
//       if (this.head === null) {
//         return null;
//       }
  
//       return this.head.data;
//     }
//   }

// const SLL1 = new SLL();
// SLL1.addFront(18);
// console.log(SLL1.front()); // Output: 18
// SLL1.removeFront();
// console.log(SLL1.front()); // Output: null
