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
  
//     display() {
//       let currentNode = this.head;
//       let result = '';
  
//       while (currentNode !== null) {
//         result += currentNode.data.toString();
//         if (currentNode.next !== null) {
//           result += ', ';
//         }
//         currentNode = currentNode.next;
//       }
  
//       return result;
//     }
//   }

//   const SLL1 = new SLL();
//   SLL1.addFront(76);
//   SLL1.addFront(2);
//   console.log(SLL1.display()); // Output: "2, 76"
//   SLL1.addFront(11.41);
//   console.log(SLL1.display()); // Output: "11.41, 2, 76"
  