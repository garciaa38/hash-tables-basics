const sha256 = require('js-sha256');

class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {

  constructor(numBuckets = 4) {
    // Your code here 
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(this.capacity).fill(null)

  }

  hash(key) {
    // Your code here 
    let first8 = sha256(key).slice(0, 8)
    let int = parseInt(first8, 16)
    // console.log(int)
    return int
  }

  hashMod(key) {
    // Your code here 
    return this.hash(key) % this.capacity
    // OR
    // return this.hash(key) % this.data.length()

  }

  insertNoCollisions(key, value) {
    // Your code here 
  }

  insertWithHashCollisions(key, value) {
    // Your code here 
  }

  insert(key, value) {
    // Your code here 
  }

}


module.exports = HashTable;
