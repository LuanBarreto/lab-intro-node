class SortedList {
  constructor() {}
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {}
  add(item) {
    this.items.push(item);
    this.length ++;
    this.items.sort((a , b) =>a - b );
  }

  get(pos) {}
  get(pos) {
    if (pos >= this.length){
      throw new Error('OutOfBounds');
    }
    return this.items[pos];
  }

  max() {}
  max() {
    if (this.items.length === 0){
      throw new Error('EmptySortedList');
    }
    return  Math.max(... this.items);
  }

  min() {}
  min() {
    if (this.items.length === 0){
      throw new Error('EmptySortedList');
    }
    return Math.min(... this.items);
  }

  sum() {}
  sum() {
    if (this.items.length === 0){
      throw new Error('EmptySortedList');
    }
    return let total = this.items.reduce((total, currentElement) => total + currentElement);
  }

  avg() {}
  avg() {
    if (this.items.length === 0){
      throw new Error('EmptySortedList');
    }
    return this.sum() / this.items.length;
  } 
}

module.exports = SortedList;