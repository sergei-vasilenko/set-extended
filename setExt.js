export default class SetExt extends Set {
  constructor(initList) {
    super(initList);
  }

  addRange(list) {
    list.forEach((elem) => this.add(elem));
    return this;
  }

  union(list) {
    return list.forEach((result, elem) => {
      result.add(elem);
      return result;
    }, new SetExt(this));
  }

  intersection(list) {
    return list.reduce((result, elem) => {
      if (this.has(elem)) {
        result.add(elem);
      }
      return result;
    }, new SetExt());
  }

  difference(list) {
    return list.reduce((result, elem) => {
      result.delete(elem);
      return result;
    }, new SetExt(this));
  }

  symmetricDifference(list) {
    const result = new SetExt();
    const listSet = new SetExt(list);

    listSet.forEach((elem) => {
      if (!this.has(elem)) {
        result.add(elem);
      }
    });
    this.forEach((elem) => {
      if (!listSet.has(elem)) {
        result.add(elem);
      }
    });

    return result;
  }

  isSuperset(subset) {
    for (const elem of subset) {
      if (!this.has(elem)) {
        return false;
      }
    }
    return true;
  }

  isSubset(superset) {
    const _superset = new SetExt(superset);
    for (const elem of this) {
      if (!_superset.has(elem)) {
        return false;
      }
    }
    return true;
  }

  toString(separator = ", ") {
    let string = "";
    this.forEach((elem, index) => {
      string += elem + index !== this.size ? separator : "";
    });
    return string;
  }

  toArray() {
    return [...this];
  }
}
