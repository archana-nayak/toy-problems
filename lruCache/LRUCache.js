

function LRUCache (limit) {
  
  this.hash = {};
  this.list = new LinkedList();
  this.limit = limit || 5;
  this.size = 0;
}

LRUCache.prototype.put = function (key, value) {
  let node;
  if (this.hash[key] !== undefined) {
    node = this.hash[key];
    node.value = value;
    this.list.moveToHead(node);
  } else {
    node = new Node(key, value);
    if (this.size < this.limit) {
      this.list.putAtHead(node);
      this.hash[key] = node;
      this.size++;
    } else {
      var keyToDelete = this.list.removeTail();
      delete this.hash[keyToDelete];
      this.hash[key] = node;
      this.list.putAtHead(node);
    }
    
  }
};

LRUCache.prototype.get = function (key) {
  let node;
  if (this.hash[key] !== undefined) {
    node = this.hash[key];  
    this.list.moveToHead(node);
    return node.value;
  }
  return null;
};

function Node(key, value) {
  this.key = key;
  this.value = value;
  this.previous = null;
  this.next = null;
}

function LinkedList() {
  this.head = null;
  this.tail = null;
}

LinkedList.prototype.putAtHead = function (node) {
  node.next = this.head;
  node.previous = null;
  if (this.head !== null) {
    this.head.previous = node;
  }
  this.head = node;
  if (this.tail === null) {
    this.tail = node;
  }
};

LinkedList.prototype.moveToHead = function (node) {
  if (node === this.head) {
    return;
  }
  node.previous.next = node.next;
  if (node.next !== null) {
    node.next.previous = node.previous;
  } else {
    this.tail = node.previous;
  }
  this.putAtHead(node);
  
};

LinkedList.prototype.removeTail = function () {
  var key = this.tail.key;
  var node = this.tail;
  this.tail = node.previous;
  if (this.tail) {
    this.tail.next = null;
  }
  if (this.head === node) {
    this.head = null;
  }
  node.previous = null;
  
  return key;
};

var lru = new LRUCache();
console.log(lru);
lru.get('archana');
lru.put('archana', '1st');
lru.get('archana');
console.log(lru);
lru.put('girish', '2nd');
console.log(lru);
lru.get('girish');
console.log(lru);
lru.get('archana');
console.log(lru);
lru.put('ameya', '3rd');
lru.put('aadhya', '4th');
console.log(lru);
lru.put('aryan', '5th');
console.log(lru);
lru.put('divya', '6th');
console.log(lru);
