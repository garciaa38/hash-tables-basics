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
    const errorMessage = 'hash collision or same key/value pair already exists!'
    this.count++;
    const newPair = new KeyValuePair(key, value);
    let arrayPos = this.hashMod(key);
    if (this.data[arrayPos] === null) {
      this.data[arrayPos] = newPair;
    } else {
      throw Error(errorMessage)
    }
  }

  insertWithHashCollisions(key, value) {
    this.count++;
    const newPair = new KeyValuePair(key, value);
    let arrayPos = this.hashMod(key);

    if (this.data[arrayPos] === null) {
      this.data[arrayPos] = newPair;
    } else {
      newPair.next = this.data[arrayPos];
      this.data[arrayPos] = newPair;
    }
  }

  insert(key, value) {
    this.count++;
    const newPair = new KeyValuePair(key, value);
    let arrayPos = this.hashMod(key);
    console.log(this.data);
    if (this.data[arrayPos] === null) {
      this.data[arrayPos] = newPair;
    } else {
      console.log(this.data[arrayPos]);
      if (this.data[arrayPos].next.key === newPair.key) {
        console.log('TEST');
        this.data[arrayPos].next = newPair;
        //newPair = this.data[arrayPos].next;
      }
      newPair.next = this.data[arrayPos];
      this.data[arrayPos] = newPair;
    }
  }

}


module.exports = HashTable;
