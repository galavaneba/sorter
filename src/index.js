class Sorter {
  constructor() {
    this.array = [];
  }

  add(element) {
    return this.array.push(element);
  }

  at(index) {
    return this.array[index];
  }

  get length() {
    return this.array.length;
  }

  toArray() {
    return this.array;
  }

  sort(indices) {
      let array = this.array,
          sortedArray;

      sortedArray = array
          .slice(indices[0], indices.length)
          .sort()
          .concat(array.slice(indices.length, array.length));

      this.array = sortedArray;

      return this.array;
  }

  setComparator(compareFunction) {
    // your implementation
  }
}

module.exports = Sorter;