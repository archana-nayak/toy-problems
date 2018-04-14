var Node = function (value) {
  this.value = value;
  this.next = null;
}

var LinkedList = function () {
  this.head = null;
  this.tail = null;
  this.size = 0;
  
  this.add = function (value) {
    var node = new Node(value);
    if (this.head === this.tail && this.head === null && this.tail === null) {
      this.head = node;
      this.tail = node;
    }
    else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }
  
  this.isEmpty = function () {
    return this.size === 0;
  }
  
  this.remove = function () {
    if (this.head === null) {
      return null;
    }
    var headNode = this.head;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      headNode.next = null;
    }
    this.size--;
    return headNode;
  }
}