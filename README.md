# Set extended
The SetExt class extends the built-in Set class by adding some additional methods for working with sets.

* `addRange(list)`: Adds elements from the passed list to the `Set`.
* `union(list)`: Returns a new `Set` representing the union of the current `Set` and the given list.
* `intersection(list)`: Returns a new `Set` containing the intersection of the current `Set` and the passed list.
* `difference(list)`: Returns a new `Set` containing the difference between the current `Set` and the given list.
* `symmetricDifference(list)`: Returns a new `Set` representing the symmetric difference between the current `Set` and the given list.
* `isSuperset(subset)`: Checks whether the current `Set` is a superset of the given subset.
* `isSubset(superset)`: Checks whether the current `Set` is a subset of the passed superset.
* `toString(separator)`: Returns a string representation of a `Set`, concatenating elements through the specified separator.
* `toArray()`: Converts a `Set` to an array.
* `toStruct({ base, step })`: Transforming the `Set` according to your structure. `base` - initial view of the desired structure, `step` - function-instruction for forming your data structure. Takes four parameters:
  1. structure in the state of the previous step
  2. current element of the `Set`
  3. current element index
  4. `Set` size

`step` must return the updated structure.
Example:
```
SetExt([1, 2, 3]).toStruct({
  base: {},
  step: (struct, elem) => {
    struct[elem] = elem;
    return struct;
  }
}); // { 1: 1, 2: 2, 3: 3 }
```