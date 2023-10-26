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
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(this.capacity).fill(null);
  }

  hash(key) {
    let hexKey = `${sha256(key).slice(0,8)}`;
    //console.log(hexKey);
    let int = parseInt(hexKey, 16);
    //console.log(int);
    return int;
  }

  hashMod(key) {
    return this.hash(key) % this.data.length;
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
    // Your code here
  }

}


module.exports = HashTable;
