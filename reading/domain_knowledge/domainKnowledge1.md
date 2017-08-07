

## What is a cookie?
Make sure to cover things like: why they were invented originally (what problem do they solve?), what they look like, how they are usually used, how they are created, how they are read and modified, a description of their lifecycle and how they are managed, and gotchas / things to watch out for when using them. 
### References
* https://github.com/hackreactor/peripheral-brain/wiki/What-is-a-cookie%3F

## What's the difference between a socket and a port?
You've used or at least heard of Socket.io, which uses WebSockets, which implements sockets via HTTP. Fine... but what does that really mean? What's a socket? 

### References
* https://en.wikipedia.org/wiki/WebSocket
* http://programmers.stackexchange.com/questions/171734/difference-between-a-socket-and-a-port
* http://stackoverflow.com/questions/152457/what-is-the-difference-between-a-port-and-a-socket

## What is the "same-origin policy"? 
What problem does it address? In what way? What resources does it apply and not apply to? When might you want to get around it?  How do you do so? 

### References
* https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
* https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy


## What are the different kinds of testing of a web system, and when do you use each?
Consider covering things like: black-box testing, automated tests, unit testing, integration testing, headless browsers, smoke tests, regression testing, acceptance testing, test environments, continuous integration, test coverage, how testing improves code quality, TDD vs BDD, and mentioning common libraries / tools / services used to implement the above practices.

## What's the difference between encryption and hashing?
What are real examples of each? What's a real algorithm for each? Bonus: very basically, how does each of those algorithms work? (e.g., if you were explaining to a layperson)

### References
* https://danielmiessler.com/study/encoding-encryption-hashing-obfuscation/#gs.zwSeb2c

## What's the difference between encoding, obfuscation, minification, and compression?
Note: this question is asked specifically in a JavaScript context.

### References
* https://danielmiessler.com/study/encoding-encryption-hashing-obfuscation/#gs.zwSeb2c

## What do "FIFO" and "LIFO" mean?
What's a realistic example of each in a software system?

## Explain what "Big O" notation is.
Consider using terms like: complexity, space, time, expected vs worst case, factorial, constant, quadratic, linear, logarithmic, linearithmic. How would you categorize O(n^2)? Can you provide an example of calculating it? What are some practical uses of this analysis?

### References
* http://stackoverflow.com/questions/487258/what-is-a-plain-english-explanation-of-big-o-notation
* http://bigocheatsheet.com/

## What is "dynamic programming"?
Note: the name of this technique is pretty confusing. There is arguably not much “dynamic” about dynamic programming. And the "programming" doesn't refer to coding. Don't get hung up the name -- focus on what the technique actually is, and provide a small example (ideally in code or pseudocode).

### References
* http://video.mit.edu/watch/introduction-to-algorithms-lecture-19-dynamic-programming-i-fibonacci-shortest-paths-14225/
* http://prismoskills.appspot.com/lessons/Dynamic_Programming/Chapter_01_-_Introduction.jsp
* https://people.cs.clemson.edu/~bcdean/dp_practice/
* https://www.topcoder.com/community/data-science/data-science-tutorials/dynamic-programming-from-novice-to-advanced/
* https://en.wikipedia.org/wiki/Dynamic_programming
* http://arcanesentiment.blogspot.com/2010/04/why-dynamic-programming.html

## Explain the JavaScript event loop.
Consider covering things like: stack frames, call stack, messages, message queue, non-blocking I/O, run-to-completion, timeouts, delays, callbacks, being single-threaded. How does this help Node.js scale, versus what typical web servers in Java, Python, Ruby need to do to scale?

### References
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop
* http://blog.carbonfive.com/2013/10/27/the-javascript-event-loop-explained/
* https://github.com/hackreactor/peripheral-brain/wiki/event-loop
