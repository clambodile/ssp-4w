# How to run your interview

## Phase 0: Take a moment to compose your mind.

Take a deep breath, calm yourself, and remember that you've got this. 

### You're not expected to be perfect.

You're not expected to be perfect. No one's perfect. You're expected to execute the basics in such a way that you show your promise. That, you can do.

### You are trained.

As Denzel Washington says in **Man on Fire**:

![](http://i.imgur.com/BSNy8kOl.png)

By the time you take the actual interview, you will be trained.

You've followed this guide. You've practiced it. 

**You've got this.**

## Phase 1: Really understand the problem

### _Really_ read the instructions

Take a minute to read the instructions.

It's ok to be quiet while you are reading.  Just say something like:

> Please give me a moment to read over the instructions

### Summarize the problem out loud

Now summarize the problem **in your own words** (don't just rotely recite the problem verbiage, as that adds nothing to the discussion).

Here's a mini-recipe for summarizing: 

* What's the expected input?
* What's the expected output?
* Review the examples provided, if any. Apply categorical reasoning to identify what's different or interesting about the examples.

### Root out initial assumptions with questions

There is almost always some subtle wrinkle or omission (whether intentional or accidental) in the problem description.

For example:

```
You will be given an array that contains two strings. Your job is to create a function that will take those two strings and transpose them, so that the strings go from top to bottom instead of left to right.

e.g. transposeTwoStrings(['Hello','World']);

should return

H W  
e o  
l r  
l l  
o d
```

Possible questions that come to my mind when I see this problem:

* How should I handle the 1st word being longer than the 2nd?
* How should I handle the 2nd word being longer than the 1st?
* Do I need to do anything about uppercase/lowercase?
* Can there be spaces inside the string? If so, do I treat them as letters?

If you truly don't see anything that's worth asking about, then just proceed, but there's almost always something useful to probe.

## Phase 2: Make a *high-level* plan of attack

DO NOT IMMEDIATELY JUMP INTO CODING.

DO NOT IMMEDIATELY JUMP INTO CODING.

DO NOT IMMEDIATELY JUMP INTO CODING.

Oh, and did I mention...

DO NOT IMMEDIATELY JUMP INTO CODING.

In fact, at this phase, **try to avoid even using programming jargon**! 

Imagine that you are discussing the problem with someone you know who is super-analytical -- say, a professional mathematician -- but who doesn't know a programming language.

You want to talk about the logic, the data, the processing -- but again don't dive right into the details of implementation yet. What are the intermediate stages of processing that will transform your target input into your target output?

### Example of how to talk about strategy

Given the `transposeTwoStrings` problem above, here's what I might say.

#### Good example

```
The input is two strings. 

The output is a series of strings delimited by carriage returns, where each line is a pair of characters at the same index in each of the strings.

We'll process the strings like a zipper, i.e., "zip" the characters together at each index. If the lengths differ, we'll pad with spaces.
```

And I might write down these notes while talking:

```
Input: 2 strings
Output: transposed strings --> 1 line per pair of chars at each index 
Process: "zip" the chars, pad shorter string with spaces
```

#### Bad example

```
Ok, I would write a for-loop to iterate over the arrays, and take the current index and look up the character at that index in each of the arrays. The characters from each array, then I would put them together into the same string, with a space in the middle, and add that to the array for the return value.  Then I will join each element of that array with the map method so the character-pairs are separated by a space, then join the entire return-array with newlines.
```

#### Why is the bad example bad?

* It's harder for you yourself to think about what you are doing. You get lost in the details immediately.
* There's so much detail there, it's hard for your interviewer/coding-partner to follow.
* It mixes implementation detail with higher-level strategy, making it harder to give useful feedback about direction.
* Because you don't get as much useful feedback about direction, it's easier for you to fall into an implementation rathole.
* You are effectively saying, "Don't help me, interviewer/coding-partner. I just want to start coding like
 
a madman, you're not gonna stop me." 

## Phase 3: Discuss your high-level plan of attack with your interviewer / coding-partner

Ask this simple question:

> What do you think of this approach?

Treat your interviewer as a partner, not as a scary judge / jury / executioner.

Bring them along for the ride.

Give them chances to steer you, to help you. Don't just bull ahead on your own.

## Phase 4: Make an implementation plan

_Now_ you can talk in terms of programming details. 

Pick a core data structure if that's important for this problem. 

You can talk about JavaScript specifically at this point if you want to. (Although it's actually better if you only talk about programming structures / concepts without specifically referring to JavaScript even at this phase)

### Example of how to talk about implementation

Given the `transposeTwoStrings` problem above, here's what I might say and write.

#### Good example

**Say:**

> OK, let's jot down some notes for the proposed approach... 

**Say, while typing these notes:**

```
* find the longest array
* use the longest array to map a "slice" (at each index) of each array into a new array
* render the target output from the new arrays
```

**Say, while typing the example:**

> Ok let's "examplify" - provide a real working example to illustrate... here are a couple of character arrays...

**Write:**

```
// input: ['a', 'b', 'c'], ['d', 'e', 'f', 'g']
```

**Say, while typing the example:**

> We can see that the longest array is the 2nd array, so we'd use that to drive the mapping. 

> Ok, now let's see what the processing would look like at each iteration of mapping, i.e., as we process each "slice"...

```
idx - arr1 - arr2
0 - 'a' - 'd' --> ['a', 'd']
1 - 'b' - 'e' --> ['b', 'e']
2 - 'c' - 'f' --> ['c', 'f']
3 - ' ' - 'g' --> [' ', 'g']
```

**Say**

> Then we'd use array joins (with a space and a newline) to render the target output.

### Bad example

** Say: **

> Ok, we'd find the longest array, then use the longest array to map a "slice" (at each index) of each array into a new array, then render the target output from the new arrays, it would look like this:

```
function transposeTwoStrings(str1, str2) {
  return zipArrays(str1.split(''), str2.split(''));
}
const zipArrays = (...arrs) =>
  arrs.reduce((a, b) => a.length > b.length ? a : b).map((_, idx) => arrs.map(arr => arr[idx] || ' ')).map((pair) => pair.join(' ')).join('\n');
```

So yeah... that _works_ -- and sure that's admittedly kind of impressive if you can just dump out code like that on the fly -- but it's incomprehensible.  It's not a discussion. You aren't bringing the interviewer / coding-partner along for the ride.  

## Phase 5: Implement!

Now you do the stuff you've been doing in the module, _Writing Code Well_.

### Make the skeleton and stubs.

Pseudocode as needed.

In this phase, as you code, you talk about what you are **about to do ** at a slightly higher level than the actual JavaScript.

Let's say you are about to write this code:

```
var splitStrings = [str1.split(''), str2.split('')];
```

### Good example of what to say

> Ok let's split each string into chars.


### Bad example of what to say

> Ok let's use the String.split method with a blank argument to split the strings into their constituent characters, and put each of the resulting arrays into an array-of-arrays and assign that to a variable called `splitStrings`.

### Test as you go

Remember [all the testing you were doing](http://hackreactor.teachable.com/courses/hack-reactor-prep/lectures/1732003).

Test as you go!  Verify the key pieces you're building, so you can completely rely on it. 

DO NOT:

1. **write a crap-load of crap-code with no tests**
2. have no idea whether it will all work or not
2. hit `Run`
3. "ah crap, it doesn't work"
4. "uh..."
5. start dropping `console.log` statements everywhere
6. "what's happening..."
7. "how does my own code work???"
8. "crap"
9. make a big ugly mess of debugging and not-quite-working code
13. "don't panic... don't panic"
14. "urrghghhghg"
15. do not pass Go, do not collect $200

Keep talking as you test. Talk about what you are testing and why.

## Troubleshoot (hopefully you won't need much of this!)

Remember: [getting unstuck](http://hackreactor.teachable.com/courses/hack-reactor-prep/lectures/1732109).

Keep talking as you troubleshoot. Talk about the assumptions you are verifying, and which troubleshooting strategy you will try next (see the article).


