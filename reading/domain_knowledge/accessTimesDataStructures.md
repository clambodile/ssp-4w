# What is the average and worst-case time complexity of access, search, insertion, and deletion for common data structures?

### A note about "access" wrt data structures
First, note that when we talk about "access" in this context, we are talking about "random access". I.e., if you have a target **element** (not a target value) in mind, does the data structure in question afford you the traversal mechanism required to reach that element?

### A note about "search" wrt data structures
When we talk about "search", we are talking about searching for a target **value** within the data structure. You can achieve this either via:

1) The aforementioned random-access traversal of the data structure's elements. In this,  more common style of search, you inspect the value of each element to determine if you have a hit and possibly to determine which element to fetch next (if you have any choice except linear access).
2) Some search mechanism that is offered explicitly as an interface into  this data structure.


## Arrays

Arrays offer random access to their contents through a numeric index.  Therefore **array access is O(1)**.

Searching for a given value requires iterating through the array. So **array search is O(n)**.

If you know that the array is sorted in a way that's amenable to binary search, then you can search the array that way and achieve **in the best case, array search is O(log n)**.

Inserting into an array requires you to shift all elements to the right by 1. If we say that on average that means `n/2` elements need to be shifted, that devolves to **array insert is O(n)*.

Deleting an element from an array requires you to shift all the elements to the left by 1. By similar logic to the above insertion case, **array deletion is O(n)**.

There is no "worst case" to worry about.

## Queues
Queues offer random access to their contents by shifting the first element off the front of the queue. You have to do this repeatedly to access an arbitary element somewhere in the queue.  Therefore, **access is O(n)**.

Searching for a given value in the queue requires iterating until you find it. So **search is O(n)**.

Inserting into a queue, by definition, can only happen at the back of the queue, similar to someone getting in line for a delicious Double-Double burger at In 'n Out. Assuming an efficient queue implementation, **queue insertion is O(1)**.

Deleting from a queue happens at the front of the queue. Assuming an efficient queue implementation, **queue deletion is O(1)**.

There is no "worst case" to worry about (as long as you don't have a cruddy implementation, see below).

### A note about efficient queue implementation

An inefficient queue implementation would be a naively-manipulated array, wherein all elements are shifted to accommodate an operation at one end of the array. This would be O(n) for one of the operations (enqueue/dequeue).

To achieve O(1) performance, you can implement a queue as either:

* a doubly-linked list, which naturally allows you to manipulate each end as a single operation.
* a "circular array", where you keep track of pointers that tells you where the front and back of the queue reside. The "front" and "back" can float around the array arbitrarily.

## Stacks
Stacks offer random access to their contents by popping the top element off the stack. You have to do this repeatedly to access an arbitary element somewhere in the stack.  Therefore, **access is O(n)**.

Searching for a given value in the stack requires repeatedly popping elements off the top of the stack until you find the value you seek. So **search is O(n)**.

Inserting into a stack can only happen at the top of the stack, similar to a burly fireman heaving yet another pancake onto a pile at the fire station pancake-breakfast fund-raiser. So **stack insertion is O(1)**.

Deleting from a stack also only happens at the top of the stack, similar to a hungry street urchin snatching a pancake from the top of the pile and scampering away, trailed by the outraged bellows of the town's cadre of heroic firefighters. So **stack deletion is O(1)**.

There is no "worst case" to worry about.

## Linked lists (singly-linked)
A linked list can typically only be accessed via its head node. From there you can only traverse from node to node until you reach the node you seek. Thus **access is O(n)**.

Searching for a given value in a linked list similarly requires traversing all the elements until you find that value. Thus **search is O(n)**.

Inserting into a linked list requires re-pointing the previous node to the inserted node, and pointing the newly-inserted node to the next node. Thus **insertion is O(1) if you already have a pointer to the previous node**. 

Note: this ignores the fact that you can't really find the node to insert after without traversing to the point of insertion. It's assumed you have gotten hold of the previous-node in some other way.

However insertion is also commonly understood to include the cost of traversal, depending on how you look at it, which is O(n) for traversal + O(1) for the insert. O(n+1) devolves to O(n). Therefore **insertion is also O(n)**.

By similar logic, **deletion is O(1) or O(n) depending on whether you count the traversal to the target location**

There is no "worst case" to worry about.

## Binary search trees (BST)
As the name suggests, searching for a value in a binary search tree is a binary process. Thus **search is O(log n)**.

In a similar vein, from the root node of a BST, you can traverse to any other node in the tree via the "halving at every step" that is the charmingly efficient core characteristic of BST's.  Thus **access in the best case is O(log n)**.

In practical use, however, "access" usually means traversing every node, via in-order, pre-order or post-order traversal. This implies that in practice **access in the common case is often O(n)**.

To insert a node in a BST, you binary-search the tree until you hit the correct leaf node, which as we saw above is O(log n), then add the value as a new child node of that leaf node, which is O(1). Thus **insertion is O(log n)**.

By similar logic, **deletion is O(log n)**.

### Worst case scenarios for BST's

The worst-case scenarios for BST's all involve a completely unbalanced tree, which degenerates into a singly-linked list.  For example, if you just add 1, 2, 3, 4, 5 in that order to a simple (non-self-balancing) BST implementation, then all your nodes will only have a right child.  You then do not get the "halving at every step" characteristic that gives BST's their power.

In this worst-case scenario:

* **access is O(n)**
* **search is O(n)**
* **insertion is O(n)**
* **deletion is O(n)**

... for the same reason.

## Hash tables

Note that in the [Big O Complexity Cheat Sheet](http://bigocheatsheet.com/), it says that the time complexity of accessing a hash table is `n/a`.

Why?

With hash tables, you can't traverse from one element to another. Thus random access is effectively non-existent.

You might balk at this idea. 

hash tables have an array behind them
the array elements are buckets
so in a sense am i not actually referencing an array index via my hashed key
and array indexing is considered an O(1) random access operation, right?

We have to go deeper...

https://www.cs.bu.edu/teaching/cs113/spring-2000/hash/

What _are_ the keys in a hash table?
They're really your data
You may balk at this -- the key is independent of the value, right?

Well in its pure sense a hash table is meant to be an optimized search structure

Let's say you have a bunch of names 

Joe, Tom, Kenny

Then you hash them, and it looks like this:

You can then store some more info about each of those people as the value 

But "Joe" is still part of the data in question

The key is in effect an id, it's part of the value that's been extracted out for quick searching

In this sense, you are always searching

Even though under the hood there's an array, you're not really using the key to refer to the array index. Your intent with the key is that you know which piece of data you want and the hash table uses your partial knowledge of that data to find it for you.

That's why we can say that **access is n/a** and **search is O(1)**.

### Worst-case scenarios for hash tables















