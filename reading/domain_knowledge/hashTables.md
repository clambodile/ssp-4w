## Hash tables

### A quick overview of hash table internal structure

Hash tables have an array behind them. The array elements are "buckets".

The hash function converts your key into a numeric index into the underlying array.

If there are hash collisions, they are handled by adding the item to a list within that bucket (a linked list, say).


### The time complexity of access

Note that in the [Big O Complexity Cheat Sheet](http://bigocheatsheet.com/), it says that the time complexity of accessing a hash table is `n/a`.

Why?

### One argument: no way to traverse
With hash tables, you can't traverse from one element to another. Thus random access is effectively non-existent.

### A related argument: there's no interface for access
An array offers a straightforward interface for random access: a numeric index.

There's no real equivalent to that for a hash table.

A key is hashed to a numeric index in the backing array, sure. However the element at that index might itself be a linked list.  

You might think "hey I am actually referencing an array index via my hashed key and array indexing is considered an O(1) random access operation, right? So... isnt this really just O(1) access?" 

However hash tables do not offer an interface for access the underlying elements. What it's offering instead is _search_.

### A hash table is a data structure for _search_

What _are_ the keys in a hash table?  They're really part of your **data**. When you supply a key to a hash table, you are asking it to search for the rest o

You may balk at this -- the key is independent of the value, right?

In its pure sense a hash table is meant to be an optimized search structure.

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

