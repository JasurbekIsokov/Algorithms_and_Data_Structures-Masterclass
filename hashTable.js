class HashTable {
  constructor(size = 100) {
    this.values = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.values.length;
    }
    return total;
  }

  set(key, value) {
    let index = this._hash(key);

    if (!this.values[index]) {
      this.values[index] = [];
    }
    this.values[index].push([key, value]);

    return this.values;
  }

  get(key) {
    let index = this._hash(key);
    if (this.values[index]) {
      for (let i = 0; i < this.values[index].length; i++) {
        if (this.values[index][i][0] === key) {
          return this.values[index][i][1];
        }
      }
    }
    return undefined;
  }
}

const hashTable = new HashTable(20);

hashTable.set("h1", "32px");
hashTable.set("h2", "24px");
hashTable.set("h3", "18.72px");
hashTable.set("h4", "16px");

console.log(hashTable);

console.log(hashTable.get("h4"));
