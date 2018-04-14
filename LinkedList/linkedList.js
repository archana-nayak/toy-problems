var Node = function (data) {
  this.data = data;
  this.next = null;
}

var LinkedList = function() {
  this.head = null;
  this.tail = null;

  this.add = function (value) {
    var node = new Node(value);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = this.tail.next;
    }
  }

  this.print = function() {
    console.log('the list');
    var current = this.head;
    while (current) {
      console.log(' -> ' + current.data);
      current = current.next;
    }
  }
this.deleteEven = function() {
  var prev = this.head;
  while (this.head && this.head.data % 2 === 0) {
    this.head = this.head.next;
    prev.next = null;
    prev = this.head;
  }
  var current = this.head;
  while (current) {
    if (current.data % 2 === 0) {
      current = current.next;
      prev.next = null;
      prev.next = current;
    } else {
      prev = current;
      current = current.next;
    }
  }
}

};

var list = new LinkedList();
list.add(3);
list.add(5);
list.add(1);
list.add(15);
list.add(6);
list.print();
list.deleteEven();
list.print();