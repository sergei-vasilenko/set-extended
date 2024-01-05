# Set extended
The SetExt class extends the built-in Set class by adding some additional methods for working with sets.

* `addRange(list)`: Adds elements from the passed list to the set.
* `union(list)`: Returns a new set representing the union of the current set and the given list.
* `intersection(list)`: Returns a new set containing the intersection of the current set and the passed list.
* `difference(list)`: Returns a new set containing the difference between the current set and the given list.
* `symmetricDifference(list)`: Returns a new set representing the symmetric difference between the current set and the given list.
* `isSuperset(subset)`: Checks whether the current set is a superset of the given subset.
* `isSubset(superset)`: Checks whether the current set is a subset of the passed superset.
* `toString(separator)`: Returns a string representation of a set, concatenating elements through the specified separator.
* `toArray()`: Converts a set to an array.