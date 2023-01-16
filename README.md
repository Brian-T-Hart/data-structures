# DATA Structures

Notes taken from [JavaScript Data Structures: Getting Started](https://www.youtube.com/watch?v=41GSinwoMYA)

## What are Data Structures?

- Data structures allow you to manage data
- Examples include Arrays, Objects, Maps, Sets, etc.
- Different tasks require different data structures
  - Ordered List, duplicates allowed
  - Unordered List, no duplicates allowed
  - Key:Value pairs of unordered data
  - Key:Value pairs of ordered, iterable data

## Built in JS Data Structures

### Arrays

- Insertion order is kept
- Elements are accessed by index
- Can have mixed element types
- The size adjusts dynamically (in JS)
- Duplicate values are allowed
- It is iterable (for loop)

### Sets

- Insertion order is not stored
- Element are accessed and extracted via method
- Iterable
- Size adjusts dynamically
- Duplicate values are not allowed
- Deletion and finding elements is trivial and fast

### Objects

- Unordered key-value pairs of data
- Elements are accessed via the key (property name)
- Not iterable (only with for-in)
- Keys are unique, values are not
- Keys have to strings, numbers or symbols
- Can store data & functionality (methods)

### Maps

- Ordered key-value pairs of data
- Elements are accessed via a key
- Iterable
- Keys are unique, values are not
- Keys can be anything (incl. reference values like arrays)
- Pure data storage, optimized for data access
- *can simplify and improve data access compared to objects*

### WeakSet & WeakMap

- Variations of Set and Map
- Values and keys are only "weakly referenced"
- Garbage collection can delete values and keys if not used anywhere else in the app

## Custom Data Structures

### Linked Lists

- Every element know about the next element
- Allows for efficient resizing and insertion at start and end of the list
- *More efficient for inserting at the beginning of the linked-list than for an array (the entire array has to shift)*

### Stacks

### Queues
